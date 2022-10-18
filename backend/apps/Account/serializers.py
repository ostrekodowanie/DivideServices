from rest_framework import serializers
from apps.Auth.models import User

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'name', 'surname', 'phone_number']