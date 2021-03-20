class City < ApplicationRecord
  # belongs_to :school
  has_many :school
end
