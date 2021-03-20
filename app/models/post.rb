		require 'elasticsearch/model'
class Post < ApplicationRecord
		# searchkick
		include Elasticsearch::Model
		include Elasticsearch::Model::Callbacks

		def self.search(query)
		__elasticsearch__.search(
		{
		  query: {
		    multi_match: {
		      query: query,
		      fields: ['title', 'text']
		    }
		  },
		  highlight: {
		    pre_tags: ['<em>'],
		    post_tags: ['</em>'],
		    fields: {
		      title: {},
		      text: {}
		    }
		  }
		}
		)
		end
		
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
