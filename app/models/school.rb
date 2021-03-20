class School < ApplicationRecord
  belongs_to :city
 #  scope :by_longitude, -> (min, max) { min && max ? where('longitude >= :min AND longitude <= :max', min: min, max: max) : all }
 # scope :by_latitude, -> (min, max) { min && max ? where('latitude >= :min AND latitude <= :max', min: min, max: max) : all }

  validates :name, :presence => true,
											:length => { :minimum => 5 }
end
