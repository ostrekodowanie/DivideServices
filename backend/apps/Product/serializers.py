from rest_framework import serializers
from .models import Product, ProductDetail, ProductToolsUsed

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductDetail
        fields = '__all__'

class ProductToolsUsedSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductToolsUsed
        fields = '__all__'