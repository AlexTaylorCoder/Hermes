class Member < ApplicationRecord
    has_many :requests, dependent: :destroy

    belongs_to :user
    belongs_to :channel

    has_many :messages

    validates :channel, presence: true
    validates :channel, uniqueness: true
end
