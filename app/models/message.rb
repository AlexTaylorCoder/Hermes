class Message < ApplicationRecord
    has_many :message_merges
    has_many :sub_channels, through: :message_merges

    belongs_to :user
    belongs_to :channel

end
