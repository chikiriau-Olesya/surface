class SearchController < ApplicationController
  def search
      if params[:term].nil?
        @posts = []
      else
        term = params[:term]
        @posts = Post.search term, fields: [:content], highlight:  true
      end
    end
    def self.search(query)
    __elasticsearch__.search(
      {
        query: {
          multi_match: {
            query: query,
            fields: ['title', 'content']
          }
        },
        highlight: {
          pre_tags: ['<em>'],
          post_tags: ['</em>'],
          fields: {
            title: {},
            content: {}
          }
        }
      }
    )
  end

  # def index
  #   @tags = Tag.all
  #   @tag = Tag.find_by(name: params[:name])
  # end

  def hashtags
    @tags = Tag.all
    @tag = Tag.find_by(name: params[:name])
    # @posts = tag.posts
  end
end
