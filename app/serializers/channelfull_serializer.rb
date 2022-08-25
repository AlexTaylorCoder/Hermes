class ChannelfullSerializer < ActiveModel::Serializer
  attributes :id, :name, :isPinned, :member_count

  has_many :members
  has_many :messages

  def member_count
    object.members.count
  end

end
