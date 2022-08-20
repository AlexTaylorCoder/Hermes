class MessageHistory < ApplicationRecord
    belongs_to :user_history
    belongs_to :channel_history
end
