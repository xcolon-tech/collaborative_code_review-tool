from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    allow_collaboration = models.BooleanField(default=False)
    allow_commit = models.BooleanField(default=False)
    allow_review = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username