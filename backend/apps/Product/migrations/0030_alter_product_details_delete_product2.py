# Generated by Django 4.1.1 on 2022-10-15 21:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0029_product2'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='details',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='details', to='Product.productdetail'),
        ),
        migrations.DeleteModel(
            name='Product2',
        ),
    ]
