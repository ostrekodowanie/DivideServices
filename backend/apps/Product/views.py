from django.shortcuts import render
from rest_framework import generics
from .models import Product, ProductDetail
from .serializers import ProductSerializer, ProductDetailSerializer

class ProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailView(generics.RetrieveAPIView):
    queryset = ProductDetail.objects.all()    
    serializer_class = ProductDetailSerializer
        
class ProductRetrieveView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'


