class AddLongitudeToCity < ActiveRecord::Migration[6.0]
  def change
    add_column :cities, :longitude, :decimal
  end
end
