# Generated by Django 5.0.6 on 2024-05-22 03:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0020_remove_bookmark_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookmark',
            name='slug',
            field=models.SlugField(max_length=255, null=True),
        ),
    ]