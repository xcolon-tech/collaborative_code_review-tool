from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Project, Member, Collaboration, FileUpload
from .serializers import ProjectSerializer, MemberSerializer, CollaborationSerializer, FileUploadSerializer

# Project Views
class ProjectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

# File Upload View
class FileUploadView(generics.CreateAPIView):
    queryset = FileUpload.objects.all()
    serializer_class = FileUploadSerializer
    parser_classes = [MultiPartParser, FormParser]

# Commit Project View
class CommitProjectView(generics.UpdateAPIView):
    queryset = Collaboration.objects.all()
    serializer_class = CollaborationSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.status = 'committed'
        instance.save()
        return super().update(request, *args, **kwargs)

# Review Collaboration View
class ReviewCollaborationView(generics.UpdateAPIView):
    queryset = Collaboration.objects.all()
    serializer_class = CollaborationSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.status = 'reviewed'
        instance.save()
        return super().update(request, *args, **kwargs)