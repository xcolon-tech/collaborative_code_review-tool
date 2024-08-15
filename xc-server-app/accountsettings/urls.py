from django.urls import path
from .views import UserProfileView, DeleteAccountView

urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('delete-account/', DeleteAccountView.as_view(), name='delete-account'),
]