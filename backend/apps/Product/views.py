from django.shortcuts import render
from rest_framework import generics
from .models import Product, ProductDetail, ProductToolsUsed
from .serializers import ProductSerializer, ProductDetailSerializer, ProductToolsUsedSerializer
from rest_framework.response import Response

class ProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailView(generics.ListAPIView):
    queryset = ProductDetail.objects.all()
    serializer_class = ProductDetailSerializer
    
class ProductToolsUsedView(generics.RetrieveAPIView):
    queryset = ProductToolsUsed.objects.all()
    serializer_class = ProductToolsUsedSerializer

def ImagesUrls(request, id):
    obj = Product.objects.get(id=id)
    context= {
        'object': obj
    }
    return render(request, 'dist/index.html', context)


