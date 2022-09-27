from posixpath import supports_unicode_filenames
from unicodedata import name
from rest_framework import serializers

class ContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    surname = serializers.CharField(max_length=255)
    email = serializers.EmailField(max_length=255)
    phone_number = serializers.CharField(max_length=15)
    message = serializers.CharField(max_length=255)

    class meta:
        fields = '__all__'