class AddMoreFiledsToSchool < ActiveRecord::Migration[6.0]
  def change
    add_column :schools, :shower, :boolean, :default => false
    add_column :schools, :room, :boolean, :default => false
    add_column :schools, :shop, :boolean, :default => false
    add_column :schools, :equip, :boolean, :default => false
    add_column :schools, :car, :boolean, :default => false
  end
end
