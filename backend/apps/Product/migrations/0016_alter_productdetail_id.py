# Generated by Django 4.1.1 on 2022-09-29 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0015_alter_productdetail_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productdetail',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
