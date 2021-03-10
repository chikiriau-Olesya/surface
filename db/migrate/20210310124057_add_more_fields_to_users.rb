class AddMoreFieldsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :inst, :string
    add_column :users, :tg, :string
    add_column :users, :fb, :string
    add_column :users, :bio, :text
  end
end
