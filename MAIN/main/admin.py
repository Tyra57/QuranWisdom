from django.contrib import admin
from .models import Author, Category, Post, Comment, Reply, Contact, Bookmark, QuizResult, ContentPage

admin.site.register(Author)
admin.site.register(Category)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Reply)
admin.site.register(Contact)
admin.site.register(Bookmark)
admin.site.register(QuizResult)
admin.site.register(ContentPage)
# Register your models here.
