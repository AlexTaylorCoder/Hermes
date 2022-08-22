class RequestSerializer < ActiveModel::Serializer
  attributes :id, :message, :status, :member_id, :user_id

  belongs_to :user
  belongs_to :member
end
