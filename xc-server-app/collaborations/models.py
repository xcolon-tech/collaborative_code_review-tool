from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    tag = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Member(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)  # In a real application, store hashed passwords

    def __str__(self):
        return self.name

class Collaboration(models.Model):
    STATUS_CHOICES = [
        ('uploaded', 'Uploaded'),
        ('committed', 'Committed'),
        ('reviewed', 'Reviewed'),
    ]

    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='uploaded')

    def __str__(self):
        return f"{self.project.name} - {self.member.name}"

class FileUpload(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    file = models.FileField(upload_to='uploads/')

    def __str__(self):
        return f"File for {self.project.name}"