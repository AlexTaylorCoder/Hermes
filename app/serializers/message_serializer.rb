class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :channel_id, :message, :isPinned

  belongs_to :user

end
