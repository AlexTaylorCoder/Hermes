class ChannelSerializer < ActiveModel::Serializer
  attributes :id, :name, :isPinned, :member_count

  has_many :members

  def member_count
    object.members.count
  end
end
