class Message < ApplicationRecord
    has_many :message_merges, dependent: :destroy
    has_many :sub_channels, through: :message_merges

    validates :user_id, presence: true
    validates :channel_id, presence: true

    belongs_to :user
    belongs_to :channel
    belongs_to :member

end
