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
        serializer.is_valid(raise_exception=True)
        email = serializer.data['email']
        name = serializer.data['name']
        surname = serializer.data['surname']
        message = serializer.data['message']
        phone_number = serializer.data['phone_number']

        email_subject = 'Contact: ' + name + ' ' + surname
        email_body = 'Email: ' + email + '\nName: ' + name + '\nSurname: ' + surname + '\nPhone number: ' + phone_number + '\nMessage: \n' + message
        data = {'email_body': email_body, 'to_email': 'se6359@gmail.com', 'email_subject': email_subject}
        Util.send_email(data)

        return Response({'message': 'Message has been sent'}, status=status.HTTP_200_OK)


