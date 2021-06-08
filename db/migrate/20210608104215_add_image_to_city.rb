class AddImageToCity < ActiveRecord::Migration[6.0]
  def change
    add_column :cities, :image, :string
  end
end
