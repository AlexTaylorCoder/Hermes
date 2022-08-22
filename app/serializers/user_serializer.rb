class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :username, :prof, :bio

  has_many :channels 
  
end
