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
        posts = db.session.query(Post).all()
        return [post.to_dict() for post in posts], 200
    
    def post(self):

        title = request.get_json['title']
        body = request.get_json['body']
        preferred_weekday = request.get_json()['preferred_weekday']
        preferred_time = request.get_json()['preferred_time']
        timezone = request.get_json()['timezone']
        players_need = request.get_json()['players_need']
        players_have = request.get_json()['players_have']
        ttrpg = request.get_json()['ttrpg']
        user_id = request.get_json()['user_id']

        new_post = Post(title=title, body=body, preferred_weekday=preferred_weekday, preferred_time=preferred_time, timezone=timezone, players_have=players_have, players_need=players_need, ttrpg=ttrpg, user_id=user_id)

        try:
            new_post = Post(title=title, body=body, preferred_weekday=preferred_weekday, preferred_time=preferred_time, timezone=timezone, players_have=int(players_have), players_need=int(players_need), ttrpg=ttrpg, user_id=int(user_id))

            db.session.add(new_post)
            db.session.commit()
            
            return new_post.to_dict(), 201
        
        except:
            return {'error': 'Failed to add new post.'}, 422




api.add_resource(PostIndex, '/posts')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

