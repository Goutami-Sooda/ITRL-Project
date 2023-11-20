from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('translate/', views.translate_algorithm, name='translate_algorithm'),
]