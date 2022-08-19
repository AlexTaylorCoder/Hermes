class UserHistorySerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :username, :prof, :bio
end
