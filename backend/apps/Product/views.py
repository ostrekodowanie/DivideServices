from django.shortcuts import render
from rest_framework import generics
from .models import Product, ProductDetail
from .serializers import ProductSerializer, ProductDetailSerializer

def products(request, slug):
    product = Product.objects.get(slug=slug)
    return render(request, 'dist/index.html', {'product': product})

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


