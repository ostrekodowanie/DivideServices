from django.urls import path
from . import views

urlpatterns = [
    path('api/orders/user/<int:pk>', views.OrderUserDetailsView.as_view()),
    path('api/orders/token', views.OrdersUserView.as_view()),
]