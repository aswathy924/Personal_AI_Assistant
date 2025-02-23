from django.urls import path 
from .views import test_api

urlpatterns = [
        path('home/',test_api, name='home_api'),
]
