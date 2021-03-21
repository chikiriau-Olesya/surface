		require 'elasticsearch/model'
class Post < ApplicationRecord
		searchkick
		include Elasticsearch::Model
		include Elasticsearch::Model::Callbacks

		validates :name, :presence => true
		validates :title, :presence => true,
											:length => { :minimum => 5 }

    has_many :coments, :dependent => :destroy
		has_many :likes, dependent: :destroy
		has_many :favorites, dependent: :destroy

		has_and_belongs_to_many :tags, :dependent => :destroy

		belongs_to :user
		belongs_to :category, optional: true
		belongs_to :post_type

		mount_uploader :image, ImageUploader

		after_create do
			post = Post.find_by(id: self.id)
			hashtags = self.content.scan(/#\w+/)
			hashtags.uniq.map do |hashtag|
				tag = Tag.find_or_create_by(name: hashtag.downcase.delete('#'))
				post.tags << tag
			end
		end

		before_update do
			post = Post.find_by(id: self.id)
			post.tags.clear
			hashtags = self.content.scan(/#\w+/)
			hashtags.uniq.map do |hashtag|
				tag = Tag.find_or_create_by(name: hashtag.downcase.delete('#'))
				post.tags << tag
			end
		end
end
