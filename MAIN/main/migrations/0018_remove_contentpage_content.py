# Generated by Django 5.0.6 on 2024-05-22 02:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0017_bookmark_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contentpage',
            name='content',
        ),
    ]
