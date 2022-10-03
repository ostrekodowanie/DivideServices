from rest_framework import serializers

class ContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    surname = serializers.CharField(max_length=255)
    email = serializers.EmailField(max_length=255)
    phone_number = serializers.CharField(max_length=15)
    message = serializers.CharField(min_length=1)

    class meta:
        fields = '__all__'