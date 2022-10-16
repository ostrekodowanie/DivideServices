from rest_framework.views import APIView
from apps.Auth.models import User
from rest_framework.response import Response
from rest_framework import status

class ChangePasswordView(APIView):
    def post(self, request):
        id = request.data['user_id']
        current_password = request.data['current_password']
        new_password = request.data['new_password']
        user = User.objects.get(pk=id)

        if user.check_password(current_password):
            user.set_password(new_password)
            user.save()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
