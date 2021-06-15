class AddIsauthorToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :isauthor, :boolean, :default => false
  end
end
