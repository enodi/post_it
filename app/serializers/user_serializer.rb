class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :username, :email
end
