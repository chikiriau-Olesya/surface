class AddContactsToSchool < ActiveRecord::Migration[6.0]
  def change
    add_column :schools, :inst, :string
    add_column :schools, :tg, :string
    add_column :schools, :fb, :string
    add_column :schools, :website, :string
    add_column :schools, :email, :string
    add_column :schools, :tel, :string
  end
end
