# Generated by Django 4.1.1 on 2022-09-29 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0018_remove_product_tools_productdetail_tools_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='productdetail',
            name='image1',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='productdetail',
            name='image2',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='productdetail',
            name='image3',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='productdetail',
            name='image4',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='producttoolsused',
            name='image',
            field=models.ImageField(upload_to=''),
        ),
    ]
