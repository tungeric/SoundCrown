class Api::TracksController < ApplicationController
  def index
    @tracks = User.find_by(id: params[:user_id]).tracks
    render :index
  end

  def show
    @track = Track.find_by(id: params[:id])
    render :show
  end

  def create
    @track = Track.new(track_params)
    if @track.save

    else
      render json: @track.errors.full_messages
    end
  end

  def destroy
    @track = Track.find_by(id: params[:id])
  end

  private

  def track_params
    params.require(:track).permit(:title, :description)
  end
end
