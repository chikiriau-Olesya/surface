class SchoolsController < ApplicationController
  before_action :set_school, only: [:show, :edit, :update, :destroy]

  # GET /schools
  # GET /schools.json
  def index
    @cities = City.all
    @surftypes = Surftype.all
    # if params.has_key?(:city)
    #   @city = City.find_by_name(params[:city])
    #   @schools = School.where(city: @city)
    #  #  schools = School.search(search_params.to_h.symbolize_keys)
    #  # render json: schools
    # else
    #   @schools = School.all
    # end

    # if params.has_key?(:surftype)
    #   @surftype = Surftype.find_by_name(params[:surftype])
    #   @schools = School.where(surftype: @surftype)
    # else
    #   @schools = School.all
    # end

    # @schools = School.where(nil)
    # @schools = @schools.filter_by_city(params[:city]) if params[:city].present?
    # @schools = @schools.filter_by_surftype(params[:surftype]) if params[:surftype].present?


    @schools = School.where(nil)
    filtering_params(params).each do |key, value|
      @schools = @schools.public_send("filter_by_#{key}", value) if value.present?
    end
  end


  def schoolsMain
    @cities = City.all
    @school = School.find_by_name(params[:school])
    @schools = School.all
    if params.has_key?(:city)
      @city = City.find_by_name(params[:city])
      @schools = School.where(city: @city)
    else
      @schools = School.all
    end
  end

  def schoolsCities
    @cities = City.all
    @city = City.find_by_name(params[:city])
    @school = School.find_by_name(params[:school])
    @schools = School.all
  end

  # GET /schools/1
  # GET /schools/1.json
  def show
    @surftypes = Surftype.all
    @surftype = Surftype.find(@school.surftype_id)
    
    if params.has_key?(:surftype)
      @surftype = Surftype.find_by_name(params[:surftype])
      @schools = School.where(surftype: @surftype)
    else
      @schools = School.all
    end

    if params.has_key?(:category)
      @category = Category.find_by_name(params[:category])
      @posts = Post.where(category: @category)
    else
      @posts = Post.all
    end

    if params.has_key?(:city)
      @city = City.find_by_name(params[:city])
      @schools = School.where(city: @city)
    else
      @schools = School.all
    end


  end

  # GET /schools/new
  def new
    @school = School.new
    @surftypes= [{id:"1", name:"классика"}, {id:"2", name:"сап"}, {id:"3", name:"вейк"}, {id:"4", name:"кайт"}, {id:"5", name:"винд"}, {id:"6", name:"скейт"}, {id:"7", name:"искусственная волна"}]
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

    def filtering_params(params)
      params.slice(:city, :surftype)
    end

    def search_params
      params.permit(:min_lng, :max_lng, :min_lat, :max_lat)
    end

    # Only allow a list of trusted parameters through.
    def school_params
      params.require(:school).permit(:name, :description, :longitude, :latitude, :city_id, :image, :inst, :tg, :fb, :website, :email, :tel, :service, :price, :season, :water, :wind, :wetsuit, :cafe, :shower, :room, :shop, :equip, :car, :surftype_id)
    end
end
