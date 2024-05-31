from django import forms
from .models import Category, Post, Comment, Contact

class PostForm(forms.ModelForm):
    #category = forms.ModelChoiceField(queryset=Category.objects.all(), required=True)
        
    class Meta:
            model = Post
            fields = ["title", "content", "Categories"]
          
class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['content']  # Adjust fields as necessary           

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['first_name', 'last_name', 'phone', 'email', 'message']