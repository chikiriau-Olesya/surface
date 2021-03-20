class AddImageToSchool < ActiveRecord::Migration[6.0]
  def change
    add_column :schools, :image, :string
  end
end
