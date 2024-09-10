#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Comment, Like, Post, Thread, Message
from config import bcrypt

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        print("Deleting records...")
        User.query.delete()
        Comment.query.delete()
        Post.query.delete()
        Like.query.delete()
        Thread.query.delete()
        Message.query.delete()

        print("Creating users...")
        users = []
        for i in range(10):
            user = User(
            first_name = fake.first_name(),
            last_name = fake.last_name(),
            username = fake.user_name(),
            _password_hash = bcrypt.generate_password_hash('sample').decode('utf-8'),
        )
            users.append(user)
        db.session.add_all(users)
        db.session.commit()

        print("Creating posts...")
        posts = []
        timezones = ["Pacific Time (US) | PDT UTC-7", "Mountain Time (US) | MDT UTC-6", "Central Time (US) | CDT UTC-5", "Eastern Time (US) | EDT UTC-4"]
        games = ["Dungeons and Dragons", "Vampire: The Masquerade", "Shadowrun", "Fallout: The Tabletop Game", "Magic: The Gathering", "Pathfinder"]
        for i in range(10):
            post = Post(
                title = fake.sentence(),
                body = fake.sentence(),
                players_need = randint(1, 6),
                players_have = randint(1, 6),
                preferred_weekday = rc(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday", "Sunday"]),
                preferred_time = rc(["Morning", "Afternoon", "Evening"]),
                timezone = rc(timezones),
                ttrpg = rc(games),
            )
            post.user = rc(users)
            posts.append(post)
        db.session.add_all(posts)
        db.session.commit()

        print("Creating comments...")
        comments = []
        for i in range(10):
            comment = Comment(
                body = fake.sentence()
            )
            comment.user = rc(users)
            comment.post = rc(posts)
            comments.append(comment)
        db.session.add_all(comments)
        db.session.commit()

        print("Creating likes...")
        likes = []
        heart_colors = ["blue", "red", "green", "yellow", "orange", "purple", "pink"]
        for i in range(10):
            like = Like(
                heart_color = rc(heart_colors)
            )
            like.user = rc(users)
            like.post = rc(posts)
            likes.append(like)
        db.session.add_all(likes)
        db.session.commit()

        print("Creating threads and messages...")
        threads = []
        messages_created = []

        for i in range(10):
            thread = Thread()
            threads.append(thread)
            thread_receiver_id = randint(1, 10)
            threads.append(thread)

        db.session.add_all(threads)
        db.session.commit()
        
        messages_received = []
        for i in range(10):
            message = Message()
            message.body = fake.sentence()
            message.thread_id = randint(1, 10)
            message.user_id = randint(1, 10)
            messages_received.append(message)
        
        db.session.add_all(messages_received)
        db.session.commit()
        print("Complete.")
