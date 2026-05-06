class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [ :create ]

  def create
    user = User.new(user_params)

    if user.save
      token = JsonWebToken.encode(user_id: user.id)

      render json: user, serializer: UserSerializer, meta: { token: token }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    user = @curent_user
    if user.update(update_params())
      render json: user, serializer: UserSerializer, meta: { token: token }, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def me
    user = @current_user
    sessions = user.meditation_sessions
    total_sessions = sessions.count
    total_minutes = sessions.sum(:duration)
    recent_session = sessions.includes(:meditation).order(created_at: :desc).first

    render json: {
      username: user.username,
      total_sessions: total_sessions,
      minutes_meditated: total_minutes,
      recent_session: recent_session && {
        id: recent_session.id,
        duration: recent_session.duration,
        created_at: recent_session.created_at,
        meditation: {
          title: recent_session.meditation.title,
          category: recent_session.meditation.category
        }
      }
    }
  end

  private
  def user_params
    params.permit(:email, :password, :password_confirmation, :bio, :username)
  end

  def update_params
    params.permit(:bio)
  end
end
