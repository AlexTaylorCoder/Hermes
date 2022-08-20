class MessageMergeHistorySerializer < ActiveModel::Serializer
  attributes :id, :message_history_id, :sub_channel_history_id
end
