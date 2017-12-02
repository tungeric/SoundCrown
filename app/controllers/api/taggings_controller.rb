class Api::TagsController < ApplicationController
  def create
    @tagging = Tagging.new(tagging_params)
    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages
    end
  end

  def destroy
    @tagging = Tagging.find_by(id: params[:id])
    @tagging.destroy
    render :show
  end

  private

  def tagging_params
    params.require(:tagging).permit(:track_id, :tag_id)
  end
end
