from rest_framework import generics
from .models import Order
from apps.Auth.models import User
from apps.Product.models import Product
from .serializers import OrderSerializer, OrderUserDetailsSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

class OrderView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderUserDetailsView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = OrderUserDetailsSerializer

class UserOrdersView(APIView):
    def post(self, request):
        id = request.data
        user = User.objects.get(pk=id)
        return Response({'name': user.name, 'surname': user.surname, 'phone_number': user.phone_number})

class UserAppsView(APIView):
    def post(self, request):
        current_user = request.user
        print(current_user.id)
        id = request.data
        return Response(Product.objects.filter(category='apps').filter(order__user=id).values())

class UserProductsView(APIView):
    def post(self, request):
        id = request.data
        products = Order.objects.filter(user=id).values('product__name', 'product__image', 'value', 'created_at')
        return Response(products)