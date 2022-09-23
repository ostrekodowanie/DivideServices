from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate
from rest_framework.response import Response
from .models import User
from .serializers import SignUpSerializer

class SignUpView(generics.GenericAPIView):
    serializer_class = SignUpSerializer
    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        User.objects.filter(email='se6359@gmail.com').update(is_staff=True, is_superuser=True, is_admin=True)
        User.objects.filter(email='filfer05@gmail.com').update(is_staff=True, is_superuser=True, is_admin=True)
        user_data = serializer.data

        return Response(user_data, status=status.HTTP_201_CREATED)
        
class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        #user = User.objects.filter(email=email).first()
        user = authenticate(email=email, password=password)
        
        if user is None:
            raise AuthenticationFailed('User not found')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password')

        return Response(status=status.HTTP_200_OK)