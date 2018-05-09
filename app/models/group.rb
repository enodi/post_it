class Group < ApplicationRecord
  has_many :group_members
  belongs_to :user

  validates_presence_of :user_id,
                        :name

  validates :name,
            uniqueness: true,
            length: { minimum: 4 },
            format:
            {
              with: /\A[a-zA-Z ]{2,}\z/,
              message: "can only contain letters and spaces"
            }
end
