# Generated by Django 4.1.1 on 2022-09-29 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0016_alter_productdetail_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productdetail',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
