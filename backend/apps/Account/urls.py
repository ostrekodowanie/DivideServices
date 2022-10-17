from django.urls import path
from .views import *

urlpatterns = [
    path('api/account/password', ChangePasswordView.as_view()),
    path('api/account/email', ChangeEmailView.as_view()),
    path('api/account/email/<int:pk>', ChangeEmailPatchView.as_view()),
]