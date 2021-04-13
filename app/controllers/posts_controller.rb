class PostsController < ApplicationController
  #http_basic_authenticate_with :name => "admin", :password => "superstrongpassword", :except => [:index, :show]

  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]
  # GET /posts
  # GET /posts.json
  def index
    @categories = Category.all
    if params.has_key?(:category)
      @category = Category.find_by_name(params[:category])
      @posts = Post.where(category: @category)
    else
      @posts = Post.all
    end
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    # @tag.post_id = Tag.find(@post.tag_id)
    @categories = Category.all
    @category = Category.find(@post.category_id)
    if params.has_key?(:category)
      @category = Category.find_by_name(params[:category])
      @posts = Post.where(category: @category)
    else
      @posts = Post.all
    end
  end

  # GET /posts/new
  def new
    @post = Post.new
    @post.post_type = PostType.find_by_name("magazine")
    # Прописивыам категории, которые отнисятся к разделу
    @categories= ["Люди", "История", "Атмосфера", "Полезное"]
    render 'newmagazine'
  end

  # Magazine (раздел журнала с категориями внутри)
  def newmagazine
    @post = Post.new
    @post.post_type = PostType.find_by_name("magazine")
    @categories= ["Люди", "История", "Атмосфера", "Полезное"]
    render 'newmagazine'
  end

  # School (карта школ)
  def newschool
    @post = Post.new
    @post.post_type = PostType.find_by_name("school")
    render 'newmagazine'
  end

  # Sport (раздел тренировок)
  def newsport
    @post = Post.new
    @post.post_type = PostType.find_by_name("sport")
    # @categories= ["", "Тренировка"]
    render 'newsport'
  end

  # Afisha (раздел афиши мероприятий)
  def newafisha
    @post = Post.new
    @post.post_type = PostType.find_by_name("afisha")
    render 'newmagazine'
  end

  def hashtags
    tag = Tag.find_by(name: params[:name])
    @posts = tag.posts
  end



  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params.merge(user_id: current_user.id))

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :author, :content, :image, :tagline, :category_id, :post_type_id, :tag_id, :topic)
    end
end
