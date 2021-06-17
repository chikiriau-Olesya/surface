class AddGalleryToSchool < ActiveRecord::Migration[6.0]
  def change
    add_column :schools, :gallery, :string
  end
end
