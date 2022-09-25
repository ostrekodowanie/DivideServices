from tkinter import CASCADE
from django.db import models
from apps.Auth.models import User
from apps.Product.models import Product

# Create your models here.

class Order(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE)
    total = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {} - {} - {} - {}".format(self.id,
                                               self.user_id,
                                               self.total,
                                               self.created_at,
                                               self.updated_at)

class Order_items(models.Model):
    id = models.AutoField(primary_key=True)
    order_id = models.ForeignKey(
        Order, on_delete=models.CASCADE)
    product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {} - {} - {} - {}".format(self.id,
                                               self.order_id,
                                               self.product_id,
                                               self.created_at,
                                               self.updated_at)