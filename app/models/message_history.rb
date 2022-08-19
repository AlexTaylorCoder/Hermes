class MessageHistory < ApplicationRecord
    # belongs_to :sub_channel
    belongs_to :user
    belongs_to :channel
end
