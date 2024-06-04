from django.shortcuts import redirect, render, get_object_or_404
from .models import Author, Bookmark, Category, Post, Comment, Reply, QuizResult, ContentPage
from .utils import update_views
from .forms import PostForm, CommentForm, ContactForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
#from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
#from django.http import JsonResponse
from django.utils.text import slugify
#from datetime import datetime
from django.contrib import messages
from django.http import HttpResponse, JsonResponse
from django.views.decorators.http import require_POST
from . import candy
from django.core.exceptions import MultipleObjectsReturned
from django.contrib import messages

def home(request):

    return render(request, "home.html")

def help(request):
    
    return render(request, "help.html")

@login_required
def like_comment(request, comment_id):
    # Directly use comment_id from the function's parameters
    comment = get_object_or_404(Comment, id=comment_id)
    # Check if the user has already liked the comment, you might want to add or remove the like
    if request.user in comment.likes.all():
        comment.likes.remove(request.user)
    else:
        comment.likes.add(request.user)
    return redirect('detail', slug=comment.post.slug)  # Assuming each comment is related to a post

@login_required
def like_reply(request, reply_id):
    reply = get_object_or_404(Reply, id=reply_id)
    if request.user in reply.likes.all():
        reply.likes.remove(request.user)
    else:
        reply.likes.add(request.user)
    return redirect('detail', slug=reply.comment.post.slug)  # Adjust the redirect as needed

#like for post
@login_required
def like_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    if request.user in post.likes.all():
        post.likes.remove(request.user)
    else:
        post.likes.add(request.user)
    return redirect('detail', slug=post.slug)

def detail(request, slug):
    post = get_object_or_404(Post, slug=slug)
    total_likes = post.total_likes()
    
    #author = Author.objects.get(user=request.user)

    if request.user.is_authenticated and "comment-form" in request.POST:
        try:
            author, created = Author.objects.get_or_create(user=request.user)
        except MultipleObjectsReturned:
            # Handle the exception, for example, by selecting the first author instance
            author = Author.objects.filter(user=request.user).first()
        
        comment = request.POST.get("comment")
        new_comment, created = Comment.objects.get_or_create(user=author, content=comment)
        post.comments.add(new_comment)

    if "reply-form" in request.POST:
        try:
            author, created = Author.objects.get_or_create(user=request.user)
        except MultipleObjectsReturned:
            author = Author.objects.filter(user=request.user).first()
        
        reply = request.POST.get("reply")
        comment_id = request.POST.get("comment-id")
        comment_obj = Comment.objects.get(id=comment_id)
        new_reply, created = Reply.objects.get_or_create(user=author, content=reply, comment=comment_obj)
        # No need to manually add the reply to the comment_obj.replies as get_or_create does this automatically
            
    context = {
        'post': post,
        'total_likes': total_likes,
    }
    update_views(request, post)
    return render(request, "detail.html", context)

def contact_view_1(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been submitted successfully!')
            return redirect('home')  # Redirect to home with anchor
    else:
        form = ContactForm()
    return render(request, 'home.html', {'form': form})

def contact_view_2(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been submitted successfully!')
            return redirect('faq')  # Redirect to FAQ with anchor
    else:
        form = ContactForm()
    return render(request, 'a10-faq.html', {'form': form}) 

def posts(request, slug):
    category = get_object_or_404(Category, slug=slug)
    posts = Post.objects.filter(Categories=category)
    #posts = Post.objects.filter(approved=True, Categories=category)
    #paginator = Paginator(posts, 30)
    #page = request.GET.get('page')
    #try:
        #posts = paginator.page(page)
    #except PageNotAnInteger:
        #posts = paginator.page(1)
    #except EmptyPage:
        #posts = paginator.page(paginator.num_pages)

    context = {
        'posts': posts,
        'forum':category,
        "title": "OZONE: Posts"
    }
    return render(request, "posts.html", context)

@login_required
def create_post(request):
    context = {}
    form = PostForm(request.POST or None)

    if request.method == "POST":
        if form.is_valid():
            author = Author.objects.get(user=request.user)
            new_post = form.save(commit=False)
            new_post.user = author
            new_post.approved = True  # Automatically approve the post
            new_post.save()
             # Since 'Categories' is part of the form, Django handles the ManyToMany relation automatically when calling form.save_m2m()
            form.save_m2m()  # This is necessary to save the ManyToMany relations since we used commit=False earlier
            return redirect('detail', slug=new_post.slug)
    context.update({
        "form": form,
        "title": "Create New Post",
    })
    return render(request, "create_post.html", context)

def latest_posts(request):
    #posts = Post.objects.all().filter(approved=True)[:10]
    posts = Post.objects.all()[:10]  # Display all posts regardless of approval status
    context = {
        'posts': posts,
        "title": "Latest 10 Posts"
    }
    return render(request, "latest-posts.html", context)

@login_required
def edit_comment(request, comment_id):
    comment = get_object_or_404(Comment, id=comment_id)
    post = comment.post  # Access the related Post object through the comment
    if request.user != comment.user.user:  # Adjust based on your user model
        # Redirect or show an error if the user is not the owner of the comment
        return redirect('home')  # Redirect to a safe page

    if request.method == 'POST':
        form = CommentForm(request.POST, instance=comment)
        if form.is_valid():
            form.save()
            # Redirect to the detail view of the post to which the comment belongs
            return redirect('detail', slug=post.slug)
    else:
        form = CommentForm(instance=comment)

    return render(request, 'edit_comment.html', {'form': form, 'comment': comment})

@login_required
def edit_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    if request.user != post.user.user:  # Adjust based on your user model
        messages.error(request, "You are not authorized to edit this post.")
        return redirect('home')
    
    if request.method == 'POST':
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            messages.success(request, "Post updated successfully.")
            return redirect('detail', slug=post.slug)  # Redirect to the post's detail view
    else:
        form = PostForm(instance=post)
    
    return render(request, 'edit_post.html', {'form': form, 'post': post})

@login_required
def edit_reply(request, reply_id):
    reply = get_object_or_404(Reply, id=reply_id)
    post = reply.comment.post  # Assuming you have a ForeignKey from Reply to Comment and from Comment to Post
    if request.user != reply.user.user:  # Adjust based on your user model
        messages.error(request, "You are not authorized to edit this reply.")
        return redirect('home')
    
    if request.method == 'POST':
        form = CommentForm(request.POST, instance=reply)  # Assuming you have a form for replies or use the same form as for comments
        if form.is_valid():
            form.save()
            messages.success(request, "Reply updated successfully.")
            return redirect('detail', slug=post.slug)  # Adjust the redirect as needed
    else:
        form = CommentForm(instance=reply)
    
    return render(request, 'edit_reply.html', {'form': form, 'reply': reply})
   
@login_required
def delete_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    # Assuming the post can belong to multiple categories, fetch the first category
    # If your model guarantees only one category per post, this approach is fine
    # Otherwise, you might want to adjust this logic to select the appropriate category
    first_category = post.Categories.first()  # Adjust 'Categories' to your field name
    if not first_category:
        # Handle the case where the post has no categories
        redirect_target = 'home'  # Fallback redirect if no category is associated
    else:
        redirect_target = ('posts', first_category.slug)  # Adjust 'posts' to your URL name for category view

    if request.user == post.user.user:  # Adjust based on your user model
        post.delete()
        messages.success(request, "Post deleted successfully.")
        if not first_category:
            return redirect(redirect_target)
        else:
            return redirect(*redirect_target)
    else:
        messages.error(request, "You are not authorized to delete this post.")
        return redirect('home')  # Redirect back to a safe page, like the home page
    
@login_required
def delete_comment(request, comment_id):
    comment = get_object_or_404(Comment, id=comment_id)
    post = comment.post
    # Assuming 'comment.user.user' is the way to access the Django User model instance from the Comment model
    # Adjust the attribute access based on your actual model relationships
    if request.user == comment.user.user:
        comment.delete()
        messages.success(request, "Comment deleted successfully.")
    else:
        # Optionally, add a message for unauthorized attempts
        messages.error(request, "You are not authorized to delete this comment.")
    
    return redirect('detail', slug=post.slug)

@login_required
def delete_reply(request, reply_id):
    reply = get_object_or_404(Reply, id=reply_id)
    post = reply.comment.post
    if request.user == reply.user.user:  # Adjust based on your model
        reply.delete()
        messages.success(request, "Reply deleted successfully.")
    else:
        messages.error(request, "You are not authorized to delete this reply.")
    return redirect('detail', slug=post.slug)  # Adjust redirect as needed

@login_required
@require_POST
def toggle_bookmark(request, slug):
    bookmark, created = Bookmark.objects.get_or_create(user=request.user, slug=slug)
    if not created:
        bookmark.delete()
        bookmarked = False
    else:
        bookmarked = True
    return JsonResponse({'bookmarked': bookmarked})

@login_required
def get_user_bookmarks(request):
    # Assuming Bookmark model has a 'slug' field and a 'user' field
    bookmarks = Bookmark.objects.filter(user=request.user).values_list('slug', flat=True)
    return JsonResponse({'bookmarkedSlugs': list(bookmarks)})

def bookmark_detail_view(request, slug):
    bookmark = get_object_or_404(Bookmark, slug=slug)
    return render(request, 'a8-profile.html', {'bookmark': bookmark})

def profile(request):
     # Retrieve the bookmarks for the current user
    user_bookmarks = Bookmark.objects.filter(user=request.user)
    # Pass the bookmarks to the template
    return render(request, 'a8-profile.html', {'bookmarks': user_bookmarks})

@login_required
def create_bookmark(request):
    if request.method == "POST":
        page_url = request.POST.get('page_url')
        Bookmark.objects.create(user=request.user, url=page_url)
        return redirect(page_url)  # Redirect back to the page
    else:
        return HttpResponse("Method not allowed", status=405)
      
def submit_quiz(request):
    if request.method == 'POST':
        quiz_type = request.POST.get('quiz_type')
        score = request.POST.get('score')
        QuizResult.objects.create(user=request.user, quiz_type=quiz_type, score=score)
        return JsonResponse({'message': 'Quiz results saved successfully'})
    return JsonResponse({'error': 'Invalid request'}, status=400)

#settings view
def settings(request):
    return render(request, "settings.html")

def view_results(request):
    results = QuizResult.objects.filter(user=request.user).order_by('-date_taken')
    return render(request, 'quiz_results.html', {'results': results})
   
def story(request):
    return render(request, "a2-story.html")

def science(request):
    return render(request, "a3-science.html")

def doa(request):
    return render(request, "a4-doa.html")

def faq(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'faq'
    return render(request, "a10-faq.html", context)

def quiz(request):
    return render(request, "a5-quiz.html")

def about(request):
    return render(request, "a9-about.html")

def story1(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")

    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Story-Barsisa-The-Worshipper'
    return render(request, "a2-story1-barsisa.html", context)

def story2(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Story-Balqis-Queen-of-Saba'
    return render(request, "a2-story2-balqis.html", context)

def story3(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Story-Dwellers-of-The-Town'
    return render(request, "a2-story3-dwellers.html", context)

def story4(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Story-DzulQarnain'
    return render(request, "a2-story4-dzulqarnain.html", context)

def story5(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Story-Gog-and-Magog'
    return render(request, "a2-story5-gogmagog.html", context)

def story6(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Story-Harut-and-Marut'
    return render(request, "a2-story6-harutmarut.html", context)

def story7(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Story-Habil-and-Qabil'
    return render(request, "a2-story7-habilqabil.html", context)

def story8(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Story-Moses-and-Al-Khadir'
    return render(request, "a2-story8-moseskhadir.html", context)

def story9(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Story-Owners-of-the-Elephants'
    return render(request, "a2-story9-elephants.html", context)

def story10(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Story-People-of-The-Cave'
    return render(request, "a2-story10-cave.html", context)

def story11(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Story-People-of-The-Ditch'
    return render(request, "a2-story11-peopleoftheditch.html", context)

def story12(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Story-People-of-The-Garden'
    return render(request, "a2-story12-peoplegarden.html", context)

def story13(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Story-Story-of-Luqman'
    return render(request, "a2-story13-luqman.html", context)

def story14(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Story-Story-of-Qorun'
    return render(request, "a2-story14-qorun.html", context)

def story15(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Story-Story-of-Saba'
    return render(request, "a2-story15-saba.html", context)

def story16(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Story-Story-of-The-Heifer'
    return render(request, "a2-story16-heifer.html", context)

def story17(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Story-The-Believer-and-The-Disbeliever'
    return render(request, "a2-story17-believerdisbeliever.html", context)

def story18(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Story-The-Sabbath-Breakers'
    return render(request, "a2-story18-sabbath.html", context)

def story19(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Story-Uzair'
    return render(request, "a2-story19-uzair.html", context)

def science1(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")

    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Science-Anemochory'
    return candy.render(request, "a3-science1-anemochory.html", context)

def science2(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")

    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Science-Celestial-Bodies-and-Their-Orbits'
    return candy.render(request, "a3-science2-celestialbodies.html", context)

def science3(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")

    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Science-Cloud-Layers'
    return render(request, "a3-science3-cloudlayers.html", context)

def science4(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")

    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Science-Constellation-Guide'
    return render(request, "a3-science4-constellationguide.html", context)

def science5(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")

    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Science-Difficulty-Breathing-At-Higher-Altitude'
    return render(request, "a3-science5-difficultybreathing.html", context)

def science6(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")

    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Science-Embryology'
    return render(request, "a3-science6-embryology.html", context)

def science7(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")

    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Science-Honey-as-a-Cure'
    return render(request, "a3-science7-honeyasacure.html", context)

def science8(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")

    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Science-Male-Chromosome-Determines-Gender'
    return render(request, "a3-science8-gender.html", context)

def science9(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")

    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Science-Milk-Production-In-Livestock'
    return render(request, "a3-science9-livestock.html", context)

def science10(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")

    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-Mountains-as-Stabilizing-Pegs-of-the-Earth-Surface'
    return render(request, "a3-science10-mountains.html", context)

def science11(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-Ozone-Layer-As-a-Shield'
    return render(request, "a3-science11-ozonelayer.html", context)

def science12(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Science-The-Pain-Receptor'
    return render(request, "a3-science12-painreceptor.html", context )

def science13(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-Plant-Diversity-According-to-Location-and-Climate'
    return render(request, "a3-science13-plantdiversity.html", context)

def science14(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-Ratio-Of-Land-and-Water-on-Earth-Surface'
    return render(request, "a3-science14-landwater.html", context)

def science15(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-Role-of-Wind-in-Signaling-the-Arrival-of-Rain'
    return render(request, "a3-science15-roleofwind1.html", context)

def science16(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-Separation-Between-Different-Types-of-Seas'
    return render(request, "a3-science16-2seas.html", context)

def science17(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-The-Complexity-of-the-Universe-Compared-to-Human-Creation'
    return render(request, "a3-science17-universecomplexity.html", context)

def science18(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-The-Concept-of-Black-Holes'
    return render(request, "a3-science18-blackholes.html", context)

def science19(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-The-Creation-of-All-Things-in-Pairs'
    return render(request, "a3-science19-pairs.html", context)

def science20(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-The-Darkness-of-the-Deep-Sea'
    return render(request, "a3-science20-deepsea.html", context)

def science21(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-The-Discovery-of-DNA-and-Genetic-Information'
    return render(request, "a3-science21-dna.html", context)

def science22(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-The-Discovery-of-Internal-Waves-in-the-Ocean'
    return render(request, "a3-science22-internalwaves.html", context)

def science23(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-The-Expansion-of-The-Universe'
    return render(request, "a3-science23-universexpansion.html", context)

def science24(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-The-Geopolymer-Theory-of-the-Pyramids-Construction'
    return render(request, "a3-science24-pyramid.html", context)

def science25(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")

    context = {
        "forums": forums,
        "num_posts": num_posts,
        "num_users": num_users,
        "num_categories": num_categories,
        "last_post": last_post,
    }
    context['page_slug'] = 'Science-The-Origin-of-Life-from-Water'
    return render(request, "a3-science25-originoflife.html", context)

def science26(request):
        forums = Category.objects.all()
        num_posts = Post.objects.count()
        num_users = User.objects.count()
        num_categories = forums.count()
        last_post = Post.objects.latest("created_at")
    
        context = {
            "forums": forums,
            "num_posts": num_posts,
            "num_users": num_users,
            "num_categories": num_categories,
            "last_post": last_post,
        }
        context['page_slug'] = 'Science-The-Process-of-Rain-Formation'
        return render(request, "a3-science26-rainformation.html", context)

def science27(request):
        forums = Category.objects.all()
        num_posts = Post.objects.count()
        num_users = User.objects.count()
        num_categories = forums.count()
        last_post = Post.objects.latest("created_at")
    
        context = {
            "forums": forums,
            "num_posts": num_posts,
            "num_users": num_users,
            "num_categories": num_categories,
            "last_post": last_post,
        }
        context['page_slug'] = 'Science-The-Role-of-the-Prefrontal-Cortex-in-Cognitive-Functions'
        return render(request, "a3-science27-brain.html", context)

def science28(request):
        forums = Category.objects.all()
        num_posts = Post.objects.count()
        num_users = User.objects.count()
        num_categories = forums.count()
        last_post = Post.objects.latest("created_at")
    
        context = {
            "forums": forums,
            "num_posts": num_posts,
            "num_users": num_users,
            "num_categories": num_categories,
            "last_post": last_post,
        }
        context['page_slug'] = 'Science-The-Rotation-of-Earth-on-Its-Axis'
        return render(request, "a3-science28-axis.html", context)

def science29(request):
        forums = Category.objects.all()
        num_posts = Post.objects.count()
        num_users = User.objects.count()
        num_categories = forums.count()
        last_post = Post.objects.latest("created_at")
    
        context = {
            "forums": forums,
            "num_posts": num_posts,
            "num_users": num_users,
            "num_categories": num_categories,
            "last_post": last_post,
        }
        context['page_slug'] = 'Science-The-Seven-Layers-of-the-Earth'
        return render(request, "a3-science29-7layers.html", context)

def science30(request):
        forums = Category.objects.all()
        num_posts = Post.objects.count()
        num_users = User.objects.count()
        num_categories = forums.count()
        last_post = Post.objects.latest("created_at")
    
        context = {
            "forums": forums,
            "num_posts": num_posts,
            "num_users": num_users,
            "num_categories": num_categories,
            "last_post": last_post,
        }
        context['page_slug'] = 'Science-The-Sun-and-The-Moon-Have-Separate-Orbits'
        return render(request, "a3-science30-orbits.html", context)

def science31(request):
        forums = Category.objects.all()
        num_posts = Post.objects.count()
        num_users = User.objects.count()
        num_categories = forums.count()
        last_post = Post.objects.latest("created_at")
    
        context = {
            "forums": forums,
            "num_posts": num_posts,
            "num_users": num_users,
            "num_categories": num_categories,
            "last_post": last_post,
        }
        context['page_slug'] = 'Science-The-SunLight-and-the-Moon-Reflection'
        return render(request, "a3-science31-sunmoon.html", context)

def science32(request):
        forums = Category.objects.all()
        num_posts = Post.objects.count()
        num_users = User.objects.count()
        num_categories = forums.count()
        last_post = Post.objects.latest("created_at")
    
        context = {
            "forums": forums,
            "num_posts": num_posts,
            "num_users": num_users,
            "num_categories": num_categories,
            "last_post": last_post,
        }
        context['page_slug'] = 'Science-The-Universe-Origin-from-Smoke-and-the-Big-Bang'
        return render(request, "a3-science32-bigbang.html", context)

def science33(request):
        forums = Category.objects.all()
        num_posts = Post.objects.count()
        num_users = User.objects.count()
        num_categories = forums.count()
        last_post = Post.objects.latest("created_at")
    
        context = {
            "forums": forums,
            "num_posts": num_posts,
            "num_users": num_users,
            "num_categories": num_categories,
            "last_post": last_post,
        }
        context['page_slug'] = 'Science-Wind-Helps-Formation-of-Rain'
        return render(request, "a3-science33-windrain.html", context)


def doa1(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Children'
    return render(request, "a4-doa1-children.html", context)

def doa2(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Devotion'
    return render(request, "a4-doa2-devotion.html", context)

def doa3(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Guidance'
    return render(request, "a4-doa3-guidance.html", context)

def doa4(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Healing'
    return render(request, "a4-doa4-healing.html", context)

def doa5(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Hereafter'
    return render(request, "a4-doa5-hereafter.html", context)

def doa6(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Marriage'
    return render(request, "a4-doa6-marriage.html", context)

def doa7(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Mercy'
    return render(request, "a4-doa7-mercy.html", context)

def doa8(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Parents'
    return render(request, "a4-doa8-parents.html", context)

def doa9(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Patience'
    return render(request, "a4-doa9-patience.html", context)

def doa10(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Protection'
    return render(request, "a4-doa10-protection.html", context)

def doa11(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Repentance'
    return render(request, "a4-doa11-repentance.html", context)

def doa12(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Righteous-Company'
    return render(request, "a4-doa12-righteouscompany.html", context)

def doa13(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Sleeping'
    return render(request, "a4-doa13-sleeping.html", context)

def doa14(request):
    forums = Category.objects.all()
    num_posts = Post.objects.count()
    num_users = User.objects.count()
    num_categories = forums.count()
    last_post = Post.objects.latest("created_at")
    context = {
        "forums":forums,
        "num_posts":num_posts,
        "num_users":num_users,
        "num_categories":num_categories,
        "last_post":last_post,
    }
    context['page_slug'] = 'Doa-Strength'
    return render(request, "a4-doa14-strength.html", context)