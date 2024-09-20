from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    
    serialize_only = ('id', 'username', 'first_name', 'last_name', 'likes',)

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False, unique=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)

    posts = db.relationship('Post', back_populates='user', cascade='all, delete-orphan')
    comments = db.relationship('Comment', back_populates='user', cascade='all, delete-orphan')
    likes = db.relationship('Like', back_populates='user', cascade='all, delete-orphan')
    messages = db.relationship('Message', back_populates='user', cascade='all, delete-orphan')

    threads_created = db.relationship('Thread', backref='thread_creator', foreign_keys='Thread.thread_creator_id', cascade='all, delete-orphan', lazy='dynamic')
    threads_received = db.relationship('Thread', backref='thread_receiver', foreign_keys='Thread.thread_receiver_id', cascade='all, delete-orphan', lazy='dynamic')

    liked_posts = association_proxy('likes', 'post', creator=lambda post_obj: Like(post=post_obj))

    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    
    def __repr__(self):
        return f'<User {self.username}>'

class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts'

    serialize_only = ('id', 'title', 'body', 'preferred_weekday', 'preferred_time', 'players_have', 'players_need', 'ttrpg', 'user_id', 'timezone')

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    body = db.Column(db.String, nullable=False)
    preferred_weekday = db.Column(db.String)
    preferred_time = db.Column(db.String)
    timezone = db.Column(db.String)
    players_have = db.Column(db.Integer, nullable=False)
    players_need = db.Column(db.Integer, nullable=False)
    ttrpg = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship('User', back_populates='posts')
    comments = db.relationship('Comment', back_populates='post', cascade='all, delete-orphan')

    likes = db.relationship('Like', back_populates='post', cascade='all, delete-orphan')

    liked_users = association_proxy('likes', 'user', 
                                    creator=lambda user_obj: Like(user=user_obj))

    @validates('players_need', 'players_have')
    def validate_players_count(self, key, players):
        if int(players) > 6:
            raise AttributeError("Must be equal to or less than 6.")
        return int(players)
    
    def __repr__(self): return f'<Post {self.id}: {self.title}>'

class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments'

    serialize_only = ('body', 'id','post_id','user_id',)


    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))

    user = db.relationship('User', back_populates='comments')

    post = db.relationship('Post', back_populates='comments')

    def __repr__(self): return f'<Comment {self.id}: {self.body}>'

class Like(db.Model, SerializerMixin):
    __tablename__ = 'likes'

    serialize_only = ('id', 'heart_color', 'user_id', 'post_id',)
    
    id = db.Column(db.Integer, primary_key=True)
    heart_color = db.Column(db.String)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))

    user = db.relationship('User', back_populates='likes')
    post = db.relationship('Post', back_populates='likes')

    def __repr__(self):
        return f'<Like {self.id}:  Heart Color: {self.heart_color} by {self.user.username} on Listing: {self.post.title}>'

class Thread(db.Model, SerializerMixin):
    __tablename__ = 'threads'

    serialize_only = ('messages', 'id', 'thread_creator_id', 'thread_receiver_id', 'thread_creator.username', 'thread_receiver.username',)

    id = db.Column(db.Integer, primary_key=True)
    thread_creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    thread_receiver_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    messages = db.relationship('Message', back_populates='thread', cascade='all, delete-orphan')

    def __repr__(self): 
        return f'<Thread {self.id} between {self.thread_creator_id} and {self.thread_receiver_id}>'

class Message(db.Model, SerializerMixin):
    __tablename__ = 'messages'
    serialize_only = ('id', 'thread_id', 'user_id', 'body', 'thread.thread_creator_id',)

    id = db.Column(db.Integer, primary_key=True)
    thread_id = db.Column(db.Integer, db.ForeignKey('threads.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    body = db.Column(db.String, nullable=False)

    user = db.relationship('User', back_populates='messages')
    thread = db.relationship('Thread', back_populates='messages')

    def __repr__(self): 
        return f'<Message {self.id} from {self.user.username}'
