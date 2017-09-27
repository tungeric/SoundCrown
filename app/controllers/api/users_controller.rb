class Api::UsersController < ApplicationController

  def index
    @user = User.all
  end

  def show
    @user = User.find_by(username: params[:username])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(username: params[:username])
    if @user.update_attributes(user_params)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :avatar, :avatar_url)
  end
end
