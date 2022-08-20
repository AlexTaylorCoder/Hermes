class ChannelHistory < ApplicationRecord
    has_many :message_histories
    has_many :member_histories
    
    has_many :user_histories, through: :member_histories
    has_many :user_histories, through: :message_histories
end
