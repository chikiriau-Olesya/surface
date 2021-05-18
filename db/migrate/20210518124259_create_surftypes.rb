class CreateSurftypes < ActiveRecord::Migration[6.0]
  def change
    create_table :surftypes do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
