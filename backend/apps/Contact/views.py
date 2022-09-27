from django.shortcuts import render
from .serializers import ContactSerializer
from rest_framework.generics import GenericAPIView
from apps.Auth.utils import Util
from django.contrib.sites.shortcuts import get_current_site
from rest_framework.response import Response
from rest_framework import status

class ContactView(GenericAPIView):
    serializer_class = ContactSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        print(serializer)
        email = serializer('email')
        print(serializer('email'))
        print(serializer['email'])
        print(serializer[email])
        name = serializer('name')
        surname = serializer('surname')
        message = serializer('message')
        phone_number = serializer('phone_number')

        email_body = 'Name: ' + name + '\nSurname: ' + surname + '\nPhone number: ' + phone_number + '\nMessage: ' + message
        data = {'email_body': email_body, 'to_email': 'se6359@gmail.com', 'email_subject': 'Contact' + name + surname}
        Util.send_email(data)

        return Response({'message': 'Message has been sent'}, status=status.HTTP_200_OK)


