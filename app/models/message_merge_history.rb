class MessageMergeHistory < ApplicationRecord
    belongs_to :message_history
    belongs_to :sub_channel_history
end
