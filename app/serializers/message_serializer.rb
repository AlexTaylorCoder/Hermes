class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :channel_id, :isPinned, :post

  belongs_to :user

end
