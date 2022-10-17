from django.contrib import admin
from apps.Product.models import Product, ProductDetail, ProductToolsUsed

admin.site.register(Product)
admin.site.register(ProductDetail)
admin.site.register(ProductToolsUsed)