# Generated by Django 4.1.1 on 2022-09-29 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0014_remove_product_syf'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productdetail',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
