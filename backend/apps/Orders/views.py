from rest_framework import generics
from .models import Order
from apps.Auth.models import User
from apps.Product.models import Product
from .serializers import OrderSerializer, OrderUserDetailsSerializer, UserAppsSerializer
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

class UserAppsView(generics.GenericAPIView):
    queryset = Order.objects.all()
    serializer_class = UserAppsSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        orders = Order.objects.filter(user=serializer.data['user_id']).values()
        products = Product.objects.filter(category='apps').values()
        
        product_id = []

        for x in range(len(orders)):
            product_id.append(orders[x]['product_id'])

        user_apps = []

        for x in range(len(products)):
            for y in range(len(product_id)):
                if products[x]['id'] == product_id[y]:
                    user_apps.append(products[x])

        return Response(user_apps)

