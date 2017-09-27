class Api::TracksController < ApplicationController
  before_action :verify_logged_in, only: [:create, :update, :destroy]

  def index
    user = User.find_by(username: params[:user_username])
    if user
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

  def all_tracks
    @tracks = Track.all
    render :index
  end

  private

  def track_params
    params.require(:track).permit(:id, :title, :description, :creator_id, :audio, :cover_art, :audio_url, :cover_art_url)
  end
end
