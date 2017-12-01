class Api::TracksController < ApplicationController
  before_action :verify_logged_in, only: [:create, :update, :destroy]

  def index
    if params[:query]
      tracks = Track.search(params[:query]).order("created_at DESC")
      tracks_by_user = Track.search_by_user(params[:query]).order("created_at DESC")
      @tracks = tracks + tracks_by_user
    elsif params[:user_username]
      user = User.find_by(username: params[:user_username])
      @tracks = user.tracks
    else
      @tracks = Track.all
    end
    render :index
  end

  def show
    @track = Track.find_by(id: params[:id])
    render :show
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages
    end
  end

  def update
    @track = Track.find_by(id: params[:track][:id])
    if @track.update_attributes(track_params)
      render :show
    else
      render json: @track.errors.full_messages
    end
  end

  def destroy
    @track = Track.find_by(id: params[:id])
    @track.destroy
    render :show
  end

  def index_new
    @tracks = Track.all.order('created_at DESC').limit(5)
    render :index
  end

  def index_top
    @tracks = Track.all.order('plays DESC').limit(5)
    render :index
  end

  private

  def track_params
    params.require(:track).permit(:id, :title, :description, :plays, :creator_id, :audio, :cover_art, :audio_url, :cover_art_url, :query)
  end
end
