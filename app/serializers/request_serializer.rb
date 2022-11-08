class RequestSerializer < ActiveModel::Serializer
  attributes :id, :message, :status, :member_id, :user_id, :request_member, :channel

  def request_member
    object.member
  end

  def channel
    object.channel
  end  
end
