class ChannelSerializer < ActiveModel::Serializer
  attributes :id, :name, :isPinned, :member_count

  has_many :members

  def member_count
    members.member_count
  end
end
