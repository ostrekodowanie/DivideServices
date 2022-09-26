from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'products', views.ProductView)
urlpatterns = router.urls

urlpatterns = [
    path('api/', include(router.urls)),
    path('products/<int:id>', views.ImagesUrls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)