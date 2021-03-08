class Post < ApplicationRecord
		validates :name, :presence => true
		validates :title, :presence => true,
											:length => { :minimum => 5 }

    has_many :coments, :dependent => :destroy
		has_many :likes, dependent: :destroy
		has_many :favorites, dependent: :destroy

		belongs_to :user
		belongs_to :category, optional: true
		belongs_to :post_type

		mount_uploader :image, ImageUploader
end
