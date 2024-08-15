from rest_framework import serializers
from .models import Project, ActivityFeed, Member

class ActivityFeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityFeed
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    activity_feeds = ActivityFeedSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'