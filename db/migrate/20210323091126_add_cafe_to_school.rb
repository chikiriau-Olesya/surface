class AddCafeToSchool < ActiveRecord::Migration[6.0]
  def change
    add_column :schools, :cafe, :boolean, :default => false
  end
end
