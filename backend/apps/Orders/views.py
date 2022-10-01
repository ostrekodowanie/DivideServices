from rest_framework import generics
from .models import Order
from apps.Auth.models import User
from .serializers import OrderSerializer, OrderUserDetailsSerializer
from rest_framework.response import Response

# Create your views here.

class OrderView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderUserDetailsView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = OrderUserDetailsSerializer

class OrdersTokenView(generics.GenericAPIView):
    def post(self, request):
        id = request.data['user_id']
        user = User.objects.filter(user_id=id).first()

        return Response({'message': 'Login Successfull', 'name': user['name'], 'surname': user['surname'], 'phone_number': user['phone_number']})

