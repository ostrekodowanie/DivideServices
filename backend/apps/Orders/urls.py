from django.urls import path
from . import views

urlpatterns = [
    path('api/orders/user/<int:pk>', views.OrderUserDetailsView.as_view()),
    path('api/orders/user', views.OrdersUserView.as_view()),
    path('api/orders', views.OrderView.as_view()),
]