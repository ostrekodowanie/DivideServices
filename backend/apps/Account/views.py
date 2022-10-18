from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.conf import settings

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

from rest_framework_simplejwt.tokens import RefreshToken

import jwt

from apps.Auth.models import User
from apps.Auth.utils import Util
from .serializers import *

class ChangePasswordView(APIView):
    def post(self, request):
        id = request.data['user_id']
        current_password = request.data['current_password']
        new_password = request.data['new_password']
        user = User.objects.get(pk=id)

        if user.check_password(current_password):
            user.set_password(new_password)
            user.save()
            return Response('password successfully changed', status=status.HTTP_200_OK)
        return Response('wrong password', status=status.HTTP_400_BAD_REQUEST)

class ChangeEmailView(APIView):
    def post(self, request):
        id = request.data['user_id']
        new_email = request.data['new_email']
        user = User.objects.get(pk=id)

        if User.objects.get(email=new_email):
            return Response('user with this email already exists', status=status.HTTP_400_BAD_REQUEST)
        token = RefreshToken.for_user(user).access_token
        current_site = get_current_site(request).domain
        relativeLink = reverse('change-email')
        absurl = 'https://' + current_site + relativeLink + '?new-email=' + new_email + '&token=' + str(token)
        email_body = 'Hi ' + user.username + '\nVerify the email change to ' + new_email + ' by clicking the provided link: ' + absurl
        data = {'email_body': email_body, 'to_email': user.email, 'email_subject': 'Email change verification'}
        Util.send_email(data)

        return Response('message sent', status=status.HTTP_200_OK)

    def get(self, request):
        new_email = request.GET.get('new-email')
        token = request.GET.get('token')
        
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            return Response(new_email, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError as identifier:     
            return Response({'link expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as identifier:
            return Response({'invalid token'}, status=status.HTTP_400_BAD_REQUEST)

class ChangeEmailPatchView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = EmailChangeSerializer




