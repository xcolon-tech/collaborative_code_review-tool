from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class ActivityFeed(models.Model):
    project = models.ForeignKey(Project, related_name='activity_feeds', on_delete=models.CASCADE)
    activity_type = models.CharField(max_length=50)  # Example: 'Committed', 'Uploaded', 'Collaborated'
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.project.name} - {self.activity_type}"


class Member(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.name