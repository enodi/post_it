class AddNameAndDescriptionToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :name, :string
    add_column :groups, :description, :string
  end
end
