class ComentsController < ApplicationController
  before_action :set_coment, only: [:show, :edit, :update, :destroy]

  # GET /coments
  # GET /coments.json
  def index
    @coments = Coment.all
  end

  # GET /coments/1
  # GET /coments/1.json
  def show
  end

  # GET /coments/new
  def new
  @post = Post.find(params[:post_id])
  @coment = @post.coments.new(parent_id: params[:parent_id])
  end

  # GET /coments/1/edit
  def edit
  end

  # POST /coments
  # POST /coments.json
  def create
    @post = Post.find(params[:post_id])
    @coment = @post.coments.new(coment_params.merge(user_id: current_user.id))
    # @comment = @post.comments.new(params[:comment].permit(:body).merge(user_id: current_user.id))

      respond_to do |format|
        if @coment.save
          format.html { redirect_to @post, notice: 'Comment was successfully created.' }
        format.json { render :show, status: :created, location: @coment }
      else
        format.html { render :new }
        format.json { render json: @coment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /coments/1
  # PATCH/PUT /coments/1.json
  def update
    respond_to do |format|
      if @coment.update(coment_params)
        format.html { redirect_to @coment, notice: 'Coment was successfully updated.' }
        format.json { render :show, status: :ok, location: @coment }
      else
        format.html { render :edit }
        format.json { render json: @coment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /coments/1
  # DELETE /coments/1.json
  def destroy
    @coment.destroy
    respond_to do |format|
      format.html { redirect_to coments_url, notice: 'Coment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coment
      @coment = Coment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def coment_params
      params.require(:coment).permit(:commenter, :body, :post_id, :parent_id)
    end
end
