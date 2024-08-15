from django.urls import path
from .views import ProjectListCreateView, ProjectDetailView, MemberListCreateView, MemberDetailView, CollaborationListCreateView, CollaborationDetailView

urlpatterns = [
    path('projects/', ProjectListCreateView.as_view(), name='project-list-create'),
    path('projects/<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
    path('members/', MemberListCreateView.as_view(), name='member-list-create'),
    path('members/<int:pk>/', MemberDetailView.as_view(), name='member-detail'),
    path('collaborations/', CollaborationListCreateView.as_view(), name='collaboration-list-create'),
    path('collaborations/<int:pk>/', CollaborationDetailView.as_view(), name='collaboration-detail'),
]