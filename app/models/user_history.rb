class UserHistory < ApplicationRecord
    has_many :messages 
    has_many :members

    has_many :channels, through: :members
    has_many :channels, through: :messages
    has_many :sub_channels, through: :messages
end
