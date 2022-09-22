from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate
from rest_framework.response import Response

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