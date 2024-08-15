from django.urls import path
from .views import ProjectListCreateView, ProjectDetailView, FileUploadView, CommitProjectView, ReviewCollaborationView

urlpatterns = [
    path('projects/', ProjectListCreateView.as_view(), name='project-list-create'),
    path('projects/<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
    path('upload/', FileUploadView.as_view(), name='file-upload'),
    path('commit/<int:pk>/', CommitProjectView.as_view(), name='commit-project'),
    path('review/<int:pk>/', ReviewCollaborationView.as_view(), name='review-collaboration'),
]