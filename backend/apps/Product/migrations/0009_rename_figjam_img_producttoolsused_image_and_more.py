# Generated by Django 4.1.1 on 2022-09-28 22:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0008_delete_producttool'),
    ]

    operations = [
        migrations.RenameField(
            model_name='producttoolsused',
            old_name='figjam_img',
            new_name='image',
        ),
        migrations.RemoveField(
            model_name='producttoolsused',
            name='figma_img',
        ),
        migrations.RemoveField(
            model_name='producttoolsused',
            name='illustrator_img',
        ),
        migrations.RemoveField(
            model_name='producttoolsused',
            name='invision_img',
        ),
        migrations.RemoveField(
            model_name='producttoolsused',
            name='photoshop_img',
        ),
    ]
