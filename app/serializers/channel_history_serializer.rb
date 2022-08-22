class ChannelHistorySerializer < ActiveModel::Serializer
  attributes :id, :name, :isPinned

  has_many :member_histories
  has_many :message_histories
  has_many :sub_channel_histories
end
