class AddSurftypeToSchool < ActiveRecord::Migration[6.0]
  def change
    add_reference :schools, :surftype, null: false, foreign_key: true
  end
end
