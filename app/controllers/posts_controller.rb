class PostsController < ApplicationController
  #http_basic_authenticate_with :name => "admin", :password => "superstrongpassword", :except => [:index, :show]

  before_action :set_post, only: [:show, :edit, :update, :destroy]
  # before_action :authenticate_user!, except: [:index, :show]
  # GET /posts
  # GET /posts.json
  def index
    @categories = Category.all
    @posts = Post.all.includes(:category,:likes, :favorites).map do
      |post|
      post.as_json(include: [:category, :image, :likes, :favorites])
    end

    @posts = Post.where(nil)
    @posts = @posts.filter_by_category(params[:category]) if params[:category].present?

   #  filtering_params(params).each do |key, value|
   #   @posts = @posts.public_send("filter_by_#{key}", value).includes(:category, :likes, :favorites).map do
   #     |post|
   #     post.as_json(include: [:category, :image, :likes, :favorites])
   #   end if value.present?
   # end

    # if params.has_key?(:category)
    #   @category = Category.find_by_name(params[:category])
    #   @posts = Post.where(category: @category)
    # else
    #   @posts = Post.all
    # end
    #

    filtering_params(params).each do |key, value|
    @posts = @posts.public_send("filter_by_#{key}", value).includes(:category, :likes, :favorites)
    end

    # @posts = Post.all.order(created_at: :desc)

end


  def postsMain
    @cities = City.all

    @school = School.find_by_name(params[:school])
    @schools = School.all
    if params.has_key?(:city)
      @city = City.find_by_name(params[:city])
      @schools = School.where(city: @city)
    else
      @schools = School.all
    end


    @categories = Category.all

    @posts = Post.all.includes(:category,:likes, :favorites).map do
      |post|
      post.as_json(include: [:category, :image, :likes, :favorites])
    end
    filtering_params(params).each do |key, value|
    @posts = @posts.public_send("filter_by_#{key}", value).includes(:category, :likes, :favorites)
    end

    @posts = Post.all.order(created_at: :desc)

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

    if params.has_key?(:surftype)
      @surftype = Surftype.find_by_name(params[:surftype])
      @schools = School.where(surftype: @surftype)
    else
      @schools = School.all
    end
    if params.has_key?(:city)
      @city = City.find_by_name(params[:city])
      @schools = School.where(city: @city)
    else
      @schools = School.all
    end
  end

  # GET /posts/new
  def new
    @post = Post.new
    @post.post_type = PostType.find_by_name("magazine")
    # Прописивыам категории, которые отнисятся к разделу
    @categories= [{id:"1", name:"Люди"}, {id:"2", name:"История"}, {id:"3", name:"Атмосфера"}, {id:"4", name:"Полезное"}, {id:"5", name:"Путешествия"}, {id:"6", name:"Шорт-ы"}]
    render 'newmagazine'
  end

  # Magazine (раздел журнала с категориями внутри)
  def newmagazine
    @post = Post.new
    @post.post_type = PostType.find_by_name("magazine")
    @categories= [{id:"1", name:"Люди"}, {id:"2", name:"История"}, {id:"3", name:"Атмосфера"}, {id:"4", name:"Полезное"}, {id:"5", name:"Путешествия"}, {id:"6", name:"Шорт-ы"}]
    render 'newmagazine'
  end

  # # School (карта школ)
  # def newschool
  #   @post = Post.new
  #   @post.post_type = PostType.find_by_name("school")
  #   render 'newmagazine'
  # end
  #
  # # Sport (раздел тренировок)
  # def newsport
  #   @post = Post.new
  #   @post.post_type = PostType.find_by_name("sport")
  #   # @categories= ["", "Тренировка"]
  #   render 'newsport'
  # end
  #
  # # Afisha (раздел афиши мероприятий)
  # def newafisha
  #   @post = Post.new
  #   @post.post_type = PostType.find_by_name("afisha")
  #   render 'newmagazine'
  # end

  def hashtags
    tag = Tag.find_by(name: params[:name])
    @posts = tag.posts

    # @posts = Post.all.order(created_at: :desc)
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
        format.html { redirect_to @post, notice: 'Пост был опубликован' }
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
        format.html { redirect_to @post, notice: 'Пост был обновлен' }
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
      format.html { redirect_to posts_url, notice: 'Пост был удален' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    def filtering_params(params)
      params.slice(:category, :starts_with)
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :author, :content, :image, :tagline, :category_id, :post_type_id, :tag_id, :topic)
    end
end
