from rest_framework import generics
from .models import Order, Order_items
from .serializers import Order_itemsSerializer, OrderSerializer

# Create your views here.

class OrderView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class Order_itemsView(generics.ListCreateAPIView):
    queryset = Order_items.objects.all()
    serializer_class = Order_itemsSerializer