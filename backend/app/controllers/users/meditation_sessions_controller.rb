class Users::MeditationSessionsController < ApplicationController
  before_action :set_user

  def index
    @meditations = @user.meditation_sessions.that_are_public
    render json: @meditations
  end

  def show
    @meditation = @user.meditation_sessions.where(id: params[:id])
    render json: @meditation
  end

  def set_user
    @user = User.find(params[:user_id])
  end
end
