# Generated by Django 2.2.7 on 2019-11-06 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blueberry', '0008_auto_20191105_0102'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employer',
            name='employer_name',
            field=models.CharField(max_length=256, unique=True),
        ),
        migrations.AlterField(
            model_name='employer',
            name='industry',
            field=models.CharField(max_length=256, null=True),
        ),
        migrations.AlterUniqueTogether(
            name='site',
            unique_together={('zip_code', 'city', 'state')},
        ),
    ]
