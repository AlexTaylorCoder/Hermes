class Channel < ApplicationRecord
    has_many :messages
    has_many :members
    
    has_many :users, through: :members
    has_many :users, through: :messages
end
