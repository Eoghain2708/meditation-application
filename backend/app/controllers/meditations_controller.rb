class MeditationsController < ApplicationController

  # GET /meditations
  def index
    Rails.logger.debug params.inspect
    @meditations = Meditation.all
                      .filter_by_category(params[:category])
                      .search_title(params[:title])

    render json: @meditations
  end

  # GET /meditations/1
  def show
    @meditation = Meditation.find(params[:id])
    render json: @meditation
  end

  def category
    @categories = Meditation.categories
    render json: @categories
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meditation
      @meditation = Meditation.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def meditation_params
      params.expect(meditation: [ :title, :category ])
    end
end
