class MemberSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :channel_id, :isAdmin

end
