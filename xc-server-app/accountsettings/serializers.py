from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        if 'password' in validated_data:
            instance.set_password(validated_data['password'])
        instance.save()
        return instance

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ['user', 'allow_collaboration', 'allow_commit', 'allow_review']

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', {})
        instance.allow_collaboration = validated_data.get('allow_collaboration', instance.allow_collaboration)
        instance.allow_commit = validated_data.get('allow_commit', instance.allow_commit)
        instance.allow_review = validated_data.get('allow_review', instance.allow_review)

        instance.save()

        user = instance.user
        user.username = user_data.get('username', user.username)
        user.email = user_data.get('email', user.email)
        if 'password' in user_data:
            user.set_password(user_data['password'])
        user.save()

        return instance