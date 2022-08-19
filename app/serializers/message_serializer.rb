class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :channel_id, :message, :isPinned
end
