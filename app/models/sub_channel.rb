class SubChannel < ApplicationRecord
    has_many :message_merges, dependent: :destroy
    has_many :messages, through: :message_merges
    
end
