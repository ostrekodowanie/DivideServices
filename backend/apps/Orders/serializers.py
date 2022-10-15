from rest_framework import serializers
from .models import Order
from apps.Auth.models import User

class OrderSerializer(serializers.ModelSerializer):
    product = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Order
        fields = '__all__'

class OrderUserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'surname', 'phone_number']