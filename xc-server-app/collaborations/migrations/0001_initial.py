# Generated by Django 5.1 on 2024-08-12 21:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
                ('tag', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='FileUpload',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='uploads/')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborations.project')),
            ],
        ),
        migrations.CreateModel(
            name='Collaboration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('uploaded', 'Uploaded'), ('committed', 'Committed'), ('reviewed', 'Reviewed')], default='uploaded', max_length=10)),
                ('member', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborations.member')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborations.project')),
            ],
        ),
    ]
