class AdminController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
    @categories = Category.all
    @users = User.all
    @coments = Coment.all
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
