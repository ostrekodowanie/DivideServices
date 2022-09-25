from django.shortcuts import render
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class ProductView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

def ImagesUrls(request, id):
    obj = Product.objects.get(id=id)
    context= {
        'object': obj
    }
    return render(request, 'dist/index.html', context)


