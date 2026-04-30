class Meditations::MeditationSessionsController < ApplicationController
  before_action :set_meditation
  before_action :set_meditation_sessions

  # GET /meditations/:meditation_id/sessions
  def index
    @sessions = @meditation.meditation_sessions.that_are_public.includes(:user, :meditation)
    render json: @sessions
  end

  # GET /meditations/:meditation_id/sessions/:id
  def show
    @session = @sessions.find(params[:id])
    render json: @session
  end

  def set_meditation
    @meditation = Meditation.find(params[:meditation_id])
  end

  def set_meditation_sessions
    @sessions = @meditation.meditation_sessions.that_are_public
  end
end