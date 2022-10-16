from django.urls import path
from .views import *

urlpatterns = [
    path('api/account/password', ChangePasswordView.as_view()),
]