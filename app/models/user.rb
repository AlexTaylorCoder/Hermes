class User < ApplicationRecord
    # has_one_attached :avatar
    #validations 
    #validates the user object to ensure that first and last name exist, aswell as email and username
    validates :first_name, :last_name, :username, :password_digest, :email, presence: true

    #validates the user name password has atleast 5 to 8 characters
    validates :username, length: { minimum: 5 }
    validates :password_digest, length: { minimum: 8 }
    validates :email, :username, uniqueness: true

    #Table relations
    has_secure_password
    has_many :messages 
    has_many :members
    has_many :requests

    has_many :members, through: :requests
    has_many :channels, through: :members
    has_many :channels, through: :messages
    has_many :sub_channels, through: :messages

    


end
