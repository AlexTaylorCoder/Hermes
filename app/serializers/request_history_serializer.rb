class RequestHistorySerializer < ActiveModel::Serializer
  attributes :id, :message, :status, :member_history_id, :user_history_id
end
