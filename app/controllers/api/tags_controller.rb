class Api::TagsController < ApplicationController
  def create
    @tag = Tag.find_by_name(params[:tag][:name])
    if @tag
      render :show
    else
      @tag = Tag.new(tag_params)
      if @tag.save
        render :show
      else
        render json: @tag.errors.full_messages
      end
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
