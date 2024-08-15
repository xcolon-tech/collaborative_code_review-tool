from django.urls import path
from .views import ProjectListCreateView, ProjectDetailView, ActivityFeedListCreateView, ActivityFeedDetailView, MemberListCreateView, MemberDetailView

urlpatterns = [
    path('projects/', ProjectListCreateView.as_view(), name='project-list-create'),
    path('projects/<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
    path('activity-feeds/', ActivityFeedListCreateView.as_view(), name='activity-feed-list-create'),
    path('activity-feeds/<int:pk>/', ActivityFeedDetailView.as_view(), name='activity-feed-detail'),
    path('members/', MemberListCreateView.as_view(), name='member-list-create'),
    path('members/<int:pk>/', MemberDetailView.as_view(), name='member-detail'),
]