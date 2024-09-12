#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, jsonify, session
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Comment, Post, Like, Thread, Message

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class PostIndex(Resource):
    def get(self):
        posts = db.session.query(Post).join(User).filter(Post.user_id == User.id).all()
        return [post.to_dict() for post in posts], 200

api.add_resource(PostIndex, '/postindex')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

