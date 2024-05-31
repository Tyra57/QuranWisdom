# Generated by Django 5.0.6 on 2024-05-19 17:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_contentpage_remove_post_comments_remove_post_tags_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='replies',
        ),
        migrations.AddField(
            model_name='reply',
            name='comment',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='replies', to='main.comment'),
        ),
    ]