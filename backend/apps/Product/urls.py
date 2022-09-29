from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('api/products', views.ProductView.as_view()),
    path('products/<int:id>', views.ImagesUrls),
    path('api/products/<int:pk>', views.ProductDetailView.as_view()),
    path('api/products/tools/<int:pk>', views.ProductToolsUsedView.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)