from rest_framework import serializers
from .models import Product, ProductDetail

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ProductDetailSerializer(serializers.ModelSerializer):
    tools = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = ProductDetail
        fields = '__all__'