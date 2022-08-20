class Message < ApplicationRecord
    has_many :message_merges, dependent: :destroy
    has_many :sub_channels, through: :message_merges

    belongs_to :user
    belongs_to :channel

end
