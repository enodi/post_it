class User < ApplicationRecord
  has_secure_password

  has_many :groups
  has_many :group_members

  validates_presence_of :fullname, :username, :email, :password_digest
  validates :username,
            uniqueness: true,
            length: { minimum: 4 },
            format:
              {
                with: /\A[a-z0-9_]{4,16}\z/,
                message: "is not valid"

              }
  validates :email,
            uniqueness: true,
            format:
              {
                with: /\A[^@\s]+@[^@\s]+\z/,
                message: "is not valid"
              }
end
