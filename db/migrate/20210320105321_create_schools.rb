class CreateSchools < ActiveRecord::Migration[6.0]
  def change
    create_table :schools do |t|
      t.string :name
      t.text :description
      t.decimal :longitude
      t.decimal :latitude

      t.timestamps
    end
  end
end
