from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import UserProfile
from .serializers import UserProfileSerializer

class UserProfileView(generics.RetrieveUpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.userprofile

class DeleteAccountView(generics.DestroyAPIView):
    queryset = UserProfile.objects.all()
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.userprofile

    def perform_destroy(self, instance):
        user = instance.user
        user.delete()