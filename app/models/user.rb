class User < ApplicationRecord
    has_secure_password
    has_many :messages 
    has_many :members
    has_many :requests

    has_many :members, through: :requests
    has_many :channels, through: :members
    has_many :channels, through: :messages
    has_many :sub_channels, through: :messages


end
