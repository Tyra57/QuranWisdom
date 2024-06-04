from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from register.forms import UpdateForm
from django.contrib.auth import logout as lt
from main.models import Author  # Import the Author model

def signup(request):
    context = {}
    form = UserCreationForm(request.POST or None)
    if request.method == "POST":
        if form.is_valid():
            new_user = form.save()
            login(request, new_user)
            return redirect("update_profile")
        
    context.update({
        "form": form,
        "title": "Signup",
        })
    return render(request, "register/signup.html", context)

def signin(request):
    context = {}
    form = AuthenticationForm(request, data=request.POST)
    if request.method == "POST":
        if form.is_valid():
            user = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=user, password=password)
            if user is not None:
                login(request, user)
                return redirect("home")
        
    context.update({
        "form": form,
        "title": "Signin",
        })
    return render(request, "register/signin.html", context)

#view for author fullname on user-info-link in navbar
def author(request):
    context = {}
    user = request.user
    author = Author.objects.get(user=user)
    context.update({
        "author": author,
        })
    return render(request, "base.html", context)

@login_required
def update_profile(request):
    user = request.user
    try:
        author_profile = Author.objects.get(user=user)  # Try to get the existing Author instance
    except Author.DoesNotExist:
        author_profile = None  # If it doesn't exist, set it to None

    if request.method == "POST":
        form = UpdateForm(request.POST, request.FILES, instance=author_profile)  # Pass the existing instance to the form
        if form.is_valid():
            update_profile = form.save(commit=False)
            update_profile.user = user
            update_profile.save()
            return redirect("profile")
    else:
        form = UpdateForm(instance=author_profile)  # Pass the instance here as well for GET requests

    context = {
        "form": form,
        "title": "Update Profile",
    }
    return render(request, "register/update.html", context)

@login_required
def logout(request):
    lt(request)
    return redirect("home")