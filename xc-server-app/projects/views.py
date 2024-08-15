from rest_framework import generics
from .models import Project, ActivityFeed, Member
from .serializers import ProjectSerializer, ActivityFeedSerializer, MemberSerializer

class ProjectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ActivityFeedListCreateView(generics.ListCreateAPIView):
    queryset = ActivityFeed.objects.all()
    serializer_class = ActivityFeedSerializer

class ActivityFeedDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ActivityFeed.objects.all()
    serializer_class = ActivityFeedSerializer

class MemberListCreateView(generics.ListCreateAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

class MemberDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer