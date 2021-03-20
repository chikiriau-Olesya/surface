class AddServicesToSchool < ActiveRecord::Migration[6.0]
  def change
    add_column :schools, :service, :string
    add_column :schools, :price, :string
  end
end
