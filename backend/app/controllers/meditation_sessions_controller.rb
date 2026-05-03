class MeditationSessionsController < ApplicationController
  before_action :set_meditation_session, only: %i[ show destroy ]

  # GET /meditation_sessions (for current user)
  def index
    @meditation_sessions = @current_user.meditation_sessions
    render json: @meditation_sessions
  end


  # GET /meditation_sessions/:id
  def show
    render json: @meditation_session
  end


  # POST /meditation_sessions
  def create
    @meditation_session = @current_user.meditation_sessions.build(meditation_session_params)

    if @meditation_session.save
      render json: @meditation_session, status: :created, location: @meditation_session
    else
      render json: @meditation_session.errors, status: :unprocessable_content
    end
  end


  # DELETE /meditation_sessions/1
  def destroy
    @meditation_session.destroy!
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_meditation_session
      @meditation_session = @current_user.meditation_sessions.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def meditation_session_params
      params.expect(meditation_session: [ :meditation_id, :notes, :public, :duration ])
    end
end
