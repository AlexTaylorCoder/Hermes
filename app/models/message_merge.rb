class MessageMerge < ApplicationRecord
    belongs_to :message
    belongs_to :sub_channel
end
