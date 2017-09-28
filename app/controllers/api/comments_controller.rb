class Api::CommentsController < ApplicationController

  def index
    track = Track.find_by(id: params[:track_id])
    if track
      @comments = track.comments
    else
      @comments = Comment.all
    end
    render :index
  end

  def show
    @comment = Comment.find_by(id: params[:id])
    render :show
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author_id, :track_id)
  end
end
