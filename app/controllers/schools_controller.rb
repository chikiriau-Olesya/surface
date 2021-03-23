class SchoolsController < ApplicationController
  before_action :set_school, only: [:show, :edit, :update, :destroy]

  # GET /schools
  # GET /schools.json
  def index
    @cities = City.all
    if params.has_key?(:city)
      @city = City.find_by_name(params[:city])
      @schools = School.where(city: @city)
     #  schools = School.search(search_params.to_h.symbolize_keys)
     # render json: schools
    else
      @schools = School.all
    end
  end

  # GET /schools/1
  # GET /schools/1.json
  def show
  end

  # GET /schools/new
  def new
    @school = School.new
  end

  # GET /schools/1/edit
  def edit
  end

  # POST /schools
  # POST /schools.json
  def create
    @school = School.new(school_params)

    respond_to do |format|
      if @school.save
        format.html { redirect_to @school, notice: 'School was successfully created.' }
        format.json { render :show, status: :created, location: @school }
      else
        format.html { render :new }
        format.json { render json: @school.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /schools/1
  # PATCH/PUT /schools/1.json
  def update
    respond_to do |format|
      if @school.update(school_params)
        format.html { redirect_to @school, notice: 'School was successfully updated.' }
        format.json { render :show, status: :ok, location: @school }
      else
        format.html { render :edit }
        format.json { render json: @school.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /schools/1
  # DELETE /schools/1.json
  def destroy
    @school.destroy
    respond_to do |format|
      format.html { redirect_to schools_url, notice: 'School was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_school
      @school = School.find(params[:id])
    end

    def search_params
      params.permit(:min_lng, :max_lng, :min_lat, :max_lat)
    end

    # Only allow a list of trusted parameters through.
    def school_params
      params.require(:school).permit(:name, :description, :longitude, :latitude, :city_id, :image, :inst, :tg, :fb, :website, :email, :tel, :service, :price, :season, :water, :wind, :wetsuit, :cafe, :shower, :room, :shop, :equip, :car)
    end
end
