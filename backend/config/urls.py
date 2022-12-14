"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('products', views.index),
    path('support', views.index),
    path('profile', views.index),
    path('signup', views.index),
    path('login', views.index),
    path('login/recovery', views.index),
    path('signup/success', views.index),
    path('payment/shipping', views.index),
    path('payment/proceed', views.index),
    path('payment/success', views.index),
    path('payment/cancel', views.index),
    path('profile/email/verify', views.index, name='change-email'),
    path('', include('apps.Product.urls')),
    path('', include('apps.Auth.urls')),
    path('', include('apps.Contact.urls')),
    path('', include('apps.Orders.urls')),
    path('', include('apps.Account.urls')),
]
