class UserHistory < ApplicationRecord
    has_many :message_histories
    has_many :member_histories

    has_many :channel_histories, through: :member_histories
    has_many :channel_histories, through: :message_histories
    has_many :sub_channel_histories, through: :message_histories
end
