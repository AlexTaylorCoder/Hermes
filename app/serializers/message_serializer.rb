class MessageSerializer < ActiveModel::Serializer
  # attributes :id, :user_id, :channel_id, :isPinned, :post
  attributes :id, :post, :channel_id, :created_at, :updated_at,:sender

  def sender 
    object.user
  end

end
