class AddTopicToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :topic, :string
  end
end
