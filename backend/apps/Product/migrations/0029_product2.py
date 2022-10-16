# Generated by Django 4.1.1 on 2022-10-15 18:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0028_rename_details_id_product_details'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('desc', models.CharField(max_length=255)),
                ('image', models.ImageField(upload_to='')),
                ('price', models.FloatField()),
                ('discount', models.IntegerField(default=0)),
                ('category', models.CharField(choices=[('apps', 'Apps'), ('templates', 'Templates'), ('courses', 'Courses')], max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('details', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='Product.productdetail')),
            ],
        ),
    ]
