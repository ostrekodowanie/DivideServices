# Generated by Django 4.1.1 on 2022-10-01 00:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Orders', '0002_paymentdetails_order_product_id_alter_order_id_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='total',
        ),
    ]
