from rest_framework import serializers
from .models import Project, Member, Collaboration

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class CollaborationSerializer(serializers.ModelSerializer):
    project = ProjectSerializer(read_only=True)
    member = MemberSerializer(read_only=True)

    class Meta:
        model = Collaboration
        fields = '__all__'