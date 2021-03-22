class AddSeasonToSchool < ActiveRecord::Migration[6.0]
  def change
    add_column :schools, :season, :string
    add_column :schools, :wind, :string
    add_column :schools, :water, :string
    add_column :schools, :wetsuit, :string
  end
end
