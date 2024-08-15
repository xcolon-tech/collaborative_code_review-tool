# Social Media Scheduling Tool
Hosts Server Django Application for Social Media Scheduling Tool

# Register user
curl -X POST http://127.0.0.1:8000/api/accounts/register/ \
  -H "Content-Type: application/json" \
  -d '{
        "username": "johndoe",
        "email": "john@example.com",
        "password": "password123",
        "confirm_password": "password123"
      }'

# Login user
curl -X POST http://127.0.0.1:8000/api/accounts/login/ \
  -H "Content-Type: application/json" \
  -d '{
        "username": "johndoe",
        "password": "password123"
      }'

# Create a project
curl -X POST http://127.0.0.1:8000/api/app/projects/ \
  -H "Content-Type: application/json" \
  -d '{
        "name": "Project 1",
        "description": "This is project 1."
      }'

# Add an activity feed
curl -X POST http://127.0.0.1:8000/api/app/activity-feeds/ \
  -H "Content-Type: application/json" \
  -d '{
        "project": 1,
        "activity_type": "Committed"
      }'

# Create a member
curl -X POST http://127.0.0.1:8000/api/app/members/ \
  -H "Content-Type: application/json" \
  -d '{
        "name": "Member 1",
        "email": "member1@example.com",
        "password": "password123"
      }'

# Delete a project
curl -X DELETE http://127.0.0.1:8000/api/app/projects/1/

# Delete a member
curl -X DELETE http://127.0.0.1:8000/api/app/members/1/

# Create a collaboration
curl -X POST http://127.0.0.1:8000/api/collab/collaborations/ \
  -H "Content-Type: application/json" \
  -d '{
        "project_id": 1,
        "member_id": 2,
        "status": "committed"
      }'

# View collaboration by project
curl -X GET http://127.0.0.1:8000/api/collab/collaborations/

# Delete a collaboration
curl -X DELETE http://127.0.0.1:8000/api/collab/collaborations/1/

# Upload a file to project
curl -X POST http://127.0.0.1:8000/api/collaborations/upload/ \
  -H "Content-Type: multipart/form-data" \
  -F "project=1" \
  -F "file=@path_to_your_file"

# Commit a project
curl -X PATCH http://127.0.0.1:8000/api/collaborations/commit/1/

# Review a collaboration
curl -X PATCH http://127.0.0.1:8000/api/collaborations/review/1/

# Update user profile
curl -X PUT http://127.0.0.1:8000/api/accounts/profile/ \
  -H "Authorization: Token your_token_here" \
  -H "Content-Type: application/json" \
  -d '{
    "user": {
        "username": "new_username",
        "email": "new_email@example.com",
        "password": "newpassword"
    },
    "allow_collaboration": true,
    "allow_commit": false,
    "allow_review": true
}'

# Delete account
curl -X DELETE http://127.0.0.1:8000/api/logout/delete-account/ \
  -H "Authorization: Token your_token_here"

# User logout
curl -X POST http://127.0.0.1:8000/api/logout/ \
  -H "Authorization: Token your_token_here"

