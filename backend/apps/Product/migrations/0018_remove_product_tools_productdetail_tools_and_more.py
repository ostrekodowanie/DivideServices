# Generated by Django 4.1.1 on 2022-09-29 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0017_alter_productdetail_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='tools',
        ),
        migrations.AddField(
            model_name='productdetail',
            name='tools',
            field=models.ManyToManyField(to='Product.producttoolsused'),
        ),
        migrations.AlterField(
            model_name='producttoolsused',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
