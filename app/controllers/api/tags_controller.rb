class Api::TagsController < ApplicationController
  def index
    track = Track.find_by(id: params[:track_id])
    if track
      @tags = track.tags
    else
      @tags = Tag.all
    end
    render :index
  end

  def show
    @tag = Tag.find_by(id: params[:id])
    render :show
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])
    @tag.destroy
    render :show
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end
end
