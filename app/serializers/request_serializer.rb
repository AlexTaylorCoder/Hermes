class RequestSerializer < ActiveModel::Serializer
  attributes :id, :message, :status, :member_id, :user_id
end
