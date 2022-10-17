from rest_framework import serializers
from apps.Auth.models import User

class EmailChangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email']