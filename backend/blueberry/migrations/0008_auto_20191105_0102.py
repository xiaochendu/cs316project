# Generated by Django 2.2.6 on 2019-11-05 01:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blueberry', '0007_auto_20191029_2140'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='housingbuffer',
            name='uid',
        ),
        migrations.RemoveField(
            model_name='housingposting',
            name='uid',
        ),
    ]
