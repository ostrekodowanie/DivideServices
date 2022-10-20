from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('products/<slug>', views.products),
    path('api/products', views.ProductView.as_view()),
    path('api/products/<slug>', views.ProductRetrieveView.as_view()),
    path('api/products/details/<pk>', views.ProductDetailView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)