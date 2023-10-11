class MoviesController < ApplicationController
  before_action :set_movie, only: %i[ show edit update destroy ]

  # GET /movies or /movies.json
  def index
    @movies = Movie.all
  end

  # GET /movies/1 or /movies/1.json
  def show
  end

  # GET /movies/new
  def new
    @movie = Movie.new
  end

  # GET /movies/1/edit
  def edit
  end

  # POST /movies or /movies.json
  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      flash[:notice] = "Se creo la pelicula"
      redirect_to movie_path(@movie)
    end
  end

  # PATCH/PUT /movies/1 or /movies/1.json
  def update
  end

  # DELETE /movies/1 or /movies/1.json
  def destroy
    @movie = Movie.find(params[:id])
    @movie.destroy
    flash[:notice] = "La película ha sido eliminada exitosamente."
    redirect_to movies_path
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      begin
        @movie = Movie.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        flash[:notice] = "No existe el id"
        redirect_to movies_path
      end
    end

    # Only allow a list of trusted parameters through.
    def movie_params
      params.require(:movie).permit(:title, :rating, :description, :release_date)
    end
end