class Request < ApplicationRecord
    belongs_to :user
    belongs_to :member
    belongs_to :channel

    validate :channel_and_member_are_different

    def channel_and_member_are_different
        if self.member.id === self.user.id
            errors.add(:member, "Must be different to channel id")
            errors.add(:channel, "Must be different to member id")
        end
    end
end
