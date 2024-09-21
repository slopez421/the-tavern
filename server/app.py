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
class Docs(Resource):
    def get(self):
        return {"message": "welcome to the tavern"}, 200

class CheckSession(Resource):
    def get(self):
        if session.get('user_id'):
            user = db.session.query(User).filter(User.id == session['user_id']).first()
            return user.to_dict(), 200
        return {'error': 'Unauthorized. Not Logged In'}, 401

class PostByID(Resource):
    def get(self, postId):
        int(postId)
        post = db.session.query(Post).filter_by(id=postId).first()
        return post.to_dict(), 200

class PostIndex(Resource):
    def get(self):
        posts = db.session.query(Post).all()
        return [post.to_dict() for post in posts], 200
    
    def post(self):

        title = request.get_json()['title']
        body = request.get_json()['body']
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

class UserById(Resource):
    def get(self, id):
        user = db.session.query(User).filter_by(id=id).first()
        return user.to_dict(), 200
    
    def patch(self, id):
        user = User.query.filter_by(id=id).first()
        data = request.get_json()

        for attr in data:
            setattr(user, attr, data[attr])

        try:
            db.session.add(user)
            db.session.commit()

            return user.to_dict(), 201
        except:
            return {'error': 'Error updating user.'}, 422

class UserIndex(Resource): 
    def get(self):
        users = db.session.query(User).all()
        return [user.to_dict() for user in users], 200


class Signup(Resource):
     def post(self):

        first_name = request.get_json()['first_name']
        last_name = request.get_json()['last_name']
        username = request.get_json()['username']
        password = request.get_json()['password']
        user = User(first_name=first_name, last_name=last_name, username=username)
        user.password_hash = password

        try:
            db.session.add(user)
            db.session.commit()
            session['user_id'] = user.id
            return user.to_dict(), 201
        except:
            return {'error': 'Failed to successfully sign up.'}, 422
        
class CommentIndex(Resource):
    def get(self):
        comments = db.session.query(Comment).all()
        return [comment.to_dict() for comment in comments], 200
    
    def post(self):
        body = request.get_json()['body']
        user_id = request.get_json()['user_id']
        listing_id = request.get_json()['listing_id']

        comment = Comment(body=body, user_id=user_id, listing_id=listing_id)
        try:
            db.session.add(comment)
            db.session.commit()
            return comment.to_dict(), 201
        
        except:
            return {'error': 'Failed to post comment.'}, 422
        
class LikeIndex(Resource):
    def get(self):
        likes = db.session.query(Like).all()
        return [like.to_dict() for like in likes], 200
    
    def post(self):
        heart_color = request.get_json()['heart_color']
        user_id = request.get_json()['user_id']
        post_id = request.get_json()['post_id']

        like = Like(heart_color=heart_color, user_id=user_id, post_id=post_id)
        try:
            db.session.add(like)
            db.session.commit()

            return like.to_dict(), 201
        except:
            return {'error': 'Failed to like post.'}, 422

class LikeById(Resource):
    def delete(self, id):
        like = db.session.query(Like).filter_by(id=id).first()
        db.session.delete(like)
        db.session.commit()

        return {}, 204

class Login(Resource): 
    def post(self):
        username = request.get_json()['username']
        password = request.get_json()['password']
        user =  db.session.query(User).filter(User.username == username).first()

        if (user) and (user.authenticate(password)):
            session['user_id'] = user.id
            return user.to_dict(), 200
        
        return {'error': 'Invalid username or password.'}, 401

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {}, 204

class ThreadIndex(Resource):
    def get(self):
        threads = db.session.query(Thread).all()
        return [thread.to_dict() for thread in threads], 200
    
    def post(self):
        thread_creator_id = request.get_json()['thread_creator_id']
        thread_receiver_id = request.get_json()['thread_receiver_id']
        new_thread = Thread(thread_creator_id=thread_creator_id, thread_receiver_id=thread_receiver_id)
        
        try:
            db.session.add(new_thread)
            db.session.commit()
            return new_thread.to_dict()
        except:
            return {"error" : "Failred to start a new thread."}, 422

class MessageIndex(Resource):
    def get(self):
        messages = db.session.query(Message).all()
        return [message.to_dict() for message in messages], 200
    
    def post(self):
        body = request.get_json()['body']
        user_id = request.get_json()['user_id']
        thread_id = request.get_json()['thread_id']
        new_message = Message(body=body, user_id=user_id, thread_id=thread_id)

        try: 
            db.session.add(new_message)
            db.session.commit()
            return new_message.to_dict(), 201
        except:
            return {"error" : "Failed to send message"}, 422

api.add_resource(PostIndex, '/posts')
api.add_resource(PostByID, '/posts/<int:postId>')
api.add_resource(UserIndex, '/users')
api.add_resource(UserById, '/users/<int:id>')
api.add_resource(CommentIndex, '/comments')
api.add_resource(LikeIndex, '/likes')
api.add_resource(LikeById, '/likes/<int:id>')
api.add_resource(ThreadIndex, '/threads')
api.add_resource(MessageIndex, '/messages')
api.add_resource(Signup, '/signup')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(Docs, '/')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

