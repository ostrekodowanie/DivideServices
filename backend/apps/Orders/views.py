from rest_framework import generics
from .models import Order
from apps.Auth.models import User
from .serializers import OrderSerializer, OrderUserDetailsSerializer, UserOrdersSerializer
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

class OrdersUserView(generics.GenericAPIView):
    serializer_class = UserOrdersSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        orders = Order.objects.filter(user_id=serializer.data['user_id']).values()

        return Response(orders)

