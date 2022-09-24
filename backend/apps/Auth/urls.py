from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenObtainPairView,
)

urlpatterns = [
    path('api/signup', views.SignUpView.as_view()),
    path('api/token', views.LoginView.as_view()),
    path('api/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
]