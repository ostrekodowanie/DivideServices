from rest_framework import serializers
from .models import Order
from apps.Auth.models import User

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class OrderUserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'surname', 'phone_number']

class UserAppsSerializer(serializers.Serializer):
    user_id = serializers.IntegerField(default=0)
    class Meta:
        fields = ['user_id']

class UserProductsSerializer(serializers.Serializer):
    user_id = serializers.IntegerField(default=0)
    class Meta:
        fields = ['user_id']
