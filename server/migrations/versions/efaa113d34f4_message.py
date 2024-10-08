"""message

Revision ID: efaa113d34f4
Revises: a727b0c93e28
Create Date: 2024-09-10 18:54:53.902839

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'efaa113d34f4'
down_revision = 'a727b0c93e28'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('threads', schema=None) as batch_op:
        batch_op.add_column(sa.Column('thread_creator_id', sa.Integer(), nullable=True))
        batch_op.drop_constraint('fk_threads_thread_receiver_id_users', type_='foreignkey')
        batch_op.create_foreign_key(batch_op.f('fk_threads_thread_creator_id_users'), 'users', ['thread_creator_id'], ['id'])
        batch_op.drop_column('thread_receiver_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('threads', schema=None) as batch_op:
        batch_op.add_column(sa.Column('thread_receiver_id', sa.INTEGER(), nullable=True))
        batch_op.drop_constraint(batch_op.f('fk_threads_thread_creator_id_users'), type_='foreignkey')
        batch_op.create_foreign_key('fk_threads_thread_receiver_id_users', 'users', ['thread_receiver_id'], ['id'])
        batch_op.drop_column('thread_creator_id')

    # ### end Alembic commands ###
