class AdminController < ApplicationController
  def index
    @categories = Category.all
    @users = User.all
    @comments = Comment.all
    @pt=PostType.all
    @user = current_user

    @posts = Post.all

    if params.has_key?(:post_type)
     @pt = PostType.find_by_name(params[:post_type])
     @posts = @posts.where(post_type: @pt)
    end

    if params.has_key?(:category)
     @category = Category.find_by_name(params[:category])
     @posts = @posts.where(category: @category)
    end


  end

end
