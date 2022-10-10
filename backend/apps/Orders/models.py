from django.db import models
from apps.Auth.models import User
from apps.Product.models import Product

class Order(models.Model):
    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE)
    product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE)
    value = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {} - {} - {} - {}".format(self.pk,
                                               self.user_id,
                                               self.value,
                                               self.created_at,
                                               self.updated_at)