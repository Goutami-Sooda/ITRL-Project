from django.urls import path
from . import views

urlpatterns = [
    path('api/translate/', views.translate_algorithm, name='translate_algorithm'),
    path('api/translate/options/', views.options_view, name='options_view'),
    path('api/translateError/', views.translate_error_message, name='translate_error_message'),
    path('api/translateError/options/', views.options_view, name='options_view'),
]