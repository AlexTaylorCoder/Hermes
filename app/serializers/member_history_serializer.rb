class MemberHistorySerializer < ActiveModel::Serializer
  attributes :id, :isAdmin, :user_history_id, :channel_history_id
end
