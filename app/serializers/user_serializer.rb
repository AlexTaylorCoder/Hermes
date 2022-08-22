class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :prof, :bio

  has_many :channels 
  
end
