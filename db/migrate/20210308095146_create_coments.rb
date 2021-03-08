class CreateComents < ActiveRecord::Migration[6.0]
  def change
    create_table :coments do |t|
      t.string :commenter
      t.text :body
      t.integer :post_id
      t.integer :parent_id

      t.timestamps
    end
  end
end
