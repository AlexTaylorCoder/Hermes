class Member < ApplicationRecord
    has_many :requests, dependent: :destroy
    has_many :users, through: :requests

    belongs_to :user
    belongs_to :channel
end
