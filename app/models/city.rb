class City < ApplicationRecord
  # belongs_to :school
  has_many :school

  mount_uploader :image, ImageUploader
end
