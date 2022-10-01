from rest_framework import generics
from .models import Order
from apps.Auth.models import User
from .serializers import OrderSerializer, OrderUserDetailsSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.

class OrderView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderUserDetailsView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = OrderUserDetailsSerializer

class OrdersUserView(APIView):
    def post(self, request):
        id = request.data
        user = User.objects.get(pk=id)
        print(user)
        return Response({'name': user.name, 'surname': user.surname, 'phone_number': user.phone_number})

