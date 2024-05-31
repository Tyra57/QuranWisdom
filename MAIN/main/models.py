from django.db import models
from django.utils.text import slugify
from django.contrib.auth import get_user_model
from django_resized import ResizedImageField
from tinymce.models import HTMLField
from hitcount.models import HitCountMixin, HitCount
from django.contrib.contenttypes.fields import GenericRelation
from taggit.managers import TaggableManager
from django.shortcuts import reverse
from django.conf import settings
from django.contrib.auth.models import User
from django.db.models.signals import pre_save
from django.dispatch import receiver


User = get_user_model()

class Author(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    fullname = models.CharField(max_length=40, blank=True) 
    slug = models.SlugField(max_length=400, unique=True, blank=True) 
    bio = models.TextField(blank=True) 
    points = models.IntegerField(default=0) 
    profile_picture = ResizedImageField(size=[50, 80], quality=100, upload_to='authors', default=None, blank=True, null=True)

    def str_(self):
        return self.fullname

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.fullname)
        super(Author, self).save(*args, **kwargs)

class Category(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=400, unique=True, blank=True)
    description = models.TextField(default="description")

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Category, self).save(*args, **kwargs)

    def get_url(self):
        return reverse("posts", kwargs={"slug": self.slug})
    
    #def get_absolute_url(self):
        #return reverse('post_detail', kwargs={'slug': self.slug})
    
    @property
    def num_posts(self):
        return Post.objects.filter(Categories=self).count()
    
    @property
    def last_post(self):
        return Post.objects.filter(Categories=self).latest("created_at")

class Post(models.Model):
    title = models.CharField(max_length=400)
    slug = models.SlugField(max_length=400, unique=True, blank=True)
    user = models.ForeignKey(Author, on_delete=models.CASCADE)
    content = HTMLField()
    Categories = models.ManyToManyField(Category)
    #Categories = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='posts')
    created_at = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=True)
    hit_count_generic = GenericRelation(HitCount, object_id_field='object_pk', related_query_name='hit_count_generic_relation')
    likes = models.ManyToManyField(User, related_name='post_like', blank=True)
    #tags = TaggableManager()
    #comments = models.ManyToManyField('Comment', blank=True)
    #closed = models.BooleanField(default=False)
    #state = models.CharField(max_length=40, default="zero")
    
    def total_likes(self):
        return self.likes.count()
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Post, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
    
    def get_url(self):
        return reverse("detail", kwargs={"slug": self.slug})
    
    @property
    def num_comments(self):
        #return self.comments.count()
        return Comment.objects.filter(post=self).count()
    
    @property
    def last_reply(self):
        # Corrected to use 'created_at'
        return Comment.objects.filter(post=self).latest('created_at')
  
class Comment(models.Model):
    user = models.ForeignKey(Author, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments', null=True)  # Add this line
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(User, related_name='comment_like', blank=True)
    
    def total_likes(self):
        return self.likes.count()

    def __str__(self):
        return self.content[:100]
    
class Reply(models.Model):
    user = models.ForeignKey(Author, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='replies', null=True)  # This line is crucial
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(User, related_name='reply_like', blank=True) 
    
    def total_likes(self):
        return self.likes.count()
    
    def __str__(self):
        return self.content[:100]

    class Meta:
        verbose_name_plural = "replies"
    
class Contact(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    
class ContentPage(models.Model):
    CATEGORY_CHOICES = [
        ('science', 'Science'),
        ('story', 'Story'),
        ('dua', 'Dua'),
        # Add more categories as needed
    ]
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    url = models.URLField(null=True, blank=True)  # Store the full URL of the content page

    # Add any other fields you might need

    def __str__(self):
        return self.title
    
class Bookmark(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookmarks')
    slug = models.SlugField(max_length=255,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    content_page = models.ForeignKey(ContentPage, on_delete=models.CASCADE, related_name='bookmarks', null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} bookmarked {self.slug}"
    
    def __str__(self):
        if self.content_page:
            return f"{self.user.username} bookmarked {self.content_page.title}"
        return f"{self.user.username} bookmarked a page"
    
    def save(self, *args, **kwargs):
        if not self.content_page and self.slug:
            # Attempt to find a matching ContentPage based on the slug
            self.content_page = ContentPage.objects.filter(slug=self.slug).first()
        super().save(*args, **kwargs)
    
class QuizResult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='quiz_results')
    quiz_type = models.CharField(max_length=100)
    score = models.IntegerField()
    date_taken = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.quiz_type} - {self.score}"