# Generated by Django 4.1.1 on 2022-09-28 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0011_remove_producttoolsused_axios_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producttoolsused',
            name='tool',
            field=models.CharField(choices=[('Figma', 'Figma'), ('Photoshop', 'Photoshop'), ('Illustrator', 'Illustrator'), ('Invision', 'Invision'), ('Figjam', 'Figjam'), ('Html', 'Html'), ('Css', 'Css'), ('Js', 'Js'), ('Sass', 'Sass'), ('Axios', 'Axios'), ('React', 'React'), ('Tailwind', 'Tailwind'), ('Vite', 'Vite'), ('Nextjs', 'Nextjs'), ('Typescript', 'Typescript'), ('Django', 'Django')], default='', max_length=255),
        ),
    ]
