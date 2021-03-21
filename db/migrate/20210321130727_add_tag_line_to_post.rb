class AddTagLineToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :tagline, :text
  end
end
