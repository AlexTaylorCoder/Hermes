class MessageHistorySerializer < ActiveModel::Serializer
  attributes :id, :user_history_id, :channel_history_id, :post, :isPinned, :likes, :sub_channel_history_id
end
