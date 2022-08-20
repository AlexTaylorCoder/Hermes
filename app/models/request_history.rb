class RequestHistory < ApplicationRecord
    belongs_to :user_history
    belongs_to :member_history
end
