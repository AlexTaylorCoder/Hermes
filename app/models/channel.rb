class Channel < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :members, dependent: :destroy
    
    has_many :users, through: :members
    has_many :users, through: :messages
end
