class Users::MeditationSessionsController < ApplicationController
    before_action :set_user

    def index
      @meditation_sessions = @user.meditation_sessions.that_are_public
      render json: {
      username: @user.username,
      bio: @user.bio,
      meditations: ActiveModelSerializers::SerializableResource.new(
        @meditation_sessions,
        each_serializer: MeditationSessionSerializer)
     }
  end

  def show
    @meditation_session = @user.meditation_sessions.find(params[:id])
    render json: @meditation_session
  end

  def set_user
    @user = User.find(params[:user_id])
  end
end
