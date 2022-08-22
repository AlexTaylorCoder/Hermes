class ChannelHistory < ApplicationRecord
    has_many :message_histories
    has_many :member_histories
    
end
