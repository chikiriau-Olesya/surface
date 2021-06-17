class AddLatitudeToCity < ActiveRecord::Migration[6.0]
  def change
    add_column :cities, :latitude, :decimal
  end
end
