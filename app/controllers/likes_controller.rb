class LikesController < ApplicationController
   before_action :find_post
   before_action :find_like, only: [:destroy]

  def create
    if already_liked?
      flash[:notice] = "You can't like more than once"
    else
      @new_like = @post.likes.create(user_id: current_user.id)
      render json: @new_like
      return
    end
    redirect_to post_path(@post)
  end

  def destroy
    if !(already_liked?)
      flash[:notice] = "Cannot unlike"

    else
      @like.destroy
      render json: nil
      return
    end
    redirect_to post_path(@post)
  end
  private
  def already_liked?
    Like.where(user_id: current_user.id, post_id:
    params[:post_id]).exists?
  end
  def find_post
    @post = Post.find(params[:post_id])
  end
  def find_like
    @like = @post.likes.find(params[:id])
  end
end
