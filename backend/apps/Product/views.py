from django.shortcuts import render
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser

class ProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

def ImagesUrls(request, id):
    obj = Product.objects.get(id=id)
    context= {
        'object': obj
    }
    return render(request, 'dist/index.html', context)


