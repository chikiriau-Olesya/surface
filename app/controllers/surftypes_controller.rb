class SurftypesController < ApplicationController
  before_action :set_surftype, only: [:show, :edit, :update, :destroy]

  # GET /surftypes
  # GET /surftypes.json
  def index
    @surftypes = Surftype.all
  end

  # GET /surftypes/1
  # GET /surftypes/1.json
  def show
  end

  # GET /surftypes/new
  def new
    @surftype = Surftype.new
  end

  # GET /surftypes/1/edit
  def edit
  end

  # POST /surftypes
  # POST /surftypes.json
  def create
    @surftype = Surftype.new(surftype_params)

    respond_to do |format|
      if @surftype.save
        format.html { redirect_to @surftype, notice: 'Surftype was successfully created.' }
        format.json { render :show, status: :created, location: @surftype }
      else
        format.html { render :new }
        format.json { render json: @surftype.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /surftypes/1
  # PATCH/PUT /surftypes/1.json
  def update
    respond_to do |format|
      if @surftype.update(surftype_params)
        format.html { redirect_to @surftype, notice: 'Surftype was successfully updated.' }
        format.json { render :show, status: :ok, location: @surftype }
      else
        format.html { render :edit }
        format.json { render json: @surftype.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /surftypes/1
  # DELETE /surftypes/1.json
  def destroy
    @surftype.destroy
    respond_to do |format|
      format.html { redirect_to surftypes_url, notice: 'Surftype was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_surftype
      @surftype = Surftype.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def surftype_params
      params.require(:surftype).permit(:name, :description)
    end
end
