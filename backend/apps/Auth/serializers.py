from . import models
from rest_framework import serializers
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from rest_framework.exceptions import AuthenticationFailed

class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['username', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)

        if password is not None:
            instance.set_password(password)
            
        instance.save()

        return instance

class NewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=255, write_only=True)
    token = serializers.CharField(max_length=255, write_only=True)
    uidb64 = serializers.CharField(max_length=255, write_only=True)

    class Meta:
        fields = ['password', 'token', 'uidb64']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            token = attrs.get('token')
            uidb64 = attrs.get('uidb64')

            id = force_str(urlsafe_base64_decode(uidb64))
            user = models.User.objects.get(pk=id)

            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed('Link is invalid', 401)

            user.set_password(password)
            user.save()

        except Exception as e:
            raise AuthenticationFailed('Link is invalid', 401)
        return super().validate(attrs)
