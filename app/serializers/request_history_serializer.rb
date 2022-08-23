class RequestHistorySerializer < ActiveModel::Serializer
  attributes :id, :status, :member_history_id, :user_history_id
end
