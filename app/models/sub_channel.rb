class SubChannel < ApplicationRecord
    has_many :message_merges
    has_many :messages, through: :message_merges
    
end
