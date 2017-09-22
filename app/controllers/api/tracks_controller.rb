class Api::TracksController < ApplicationController
  def index
    @tracks = User.find_by(username: params[:user_username]).tracks
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

  def destroy
    @track = Track.find_by(id: params[:id])
  end

  def all_tracks
    @tracks = Track.all
    render :index
  end

  private

  def track_params
    params.require(:track).permit(:title, :description, :creator_id, :audio)
  end
end
