class School < ApplicationRecord
  belongs_to :city
  belongs_to :surftype

  scope :filter_by_city, -> (city) { where city: city }
  scope :filter_by_surftype, -> (surftype) { where surftype: surftype }
 #  scope :by_longitude, -> (min, max) { min && max ? where('longitude >= :min AND longitude <= :max', min: min, max: max) : all }
 # scope :by_latitude, -> (min, max) { min && max ? where('latitude >= :min AND latitude <= :max', min: min, max: max) : all }

  validates :name, :presence => true,
											:length => { :minimum => 5 }

  mount_uploader :image, ImageUploader
end
