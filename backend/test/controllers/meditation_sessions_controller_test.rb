require "test_helper"

class MeditationSessionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @meditation_session = meditation_sessions(:one)
  end

  test "should get index" do
    get meditation_sessions_url, as: :json
    assert_response :success
  end

  test "should create meditation_session" do
    assert_difference("MeditationSession.count") do
      post meditation_sessions_url, params: { meditation_session: { duration: @meditation_session.duration, meditation_id: @meditation_session.meditation_id, notes: @meditation_session.notes, public: @meditation_session.public, user_id: @meditation_session.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show meditation_session" do
    get meditation_session_url(@meditation_session), as: :json
    assert_response :success
  end

  test "should update meditation_session" do
    patch meditation_session_url(@meditation_session), params: { meditation_session: { duration: @meditation_session.duration, meditation_id: @meditation_session.meditation_id, notes: @meditation_session.notes, public: @meditation_session.public, user_id: @meditation_session.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy meditation_session" do
    assert_difference("MeditationSession.count", -1) do
      delete meditation_session_url(@meditation_session), as: :json
    end

    assert_response :no_content
  end
end
