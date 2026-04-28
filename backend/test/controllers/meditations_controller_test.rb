require "test_helper"

class MeditationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @meditation = meditations(:one)
  end

  test "should get index" do
    get meditations_url, as: :json
    assert_response :success
  end

  test "should create meditation" do
    assert_difference("Meditation.count") do
      post meditations_url, params: { meditation: { benefits: @meditation.benefits, category: @meditation.category, description: @meditation.description, title: @meditation.title } }, as: :json
    end

    assert_response :created
  end

  test "should show meditation" do
    get meditation_url(@meditation), as: :json
    assert_response :success
  end

  test "should update meditation" do
    patch meditation_url(@meditation), params: { meditation: { benefits: @meditation.benefits, category: @meditation.category, description: @meditation.description, title: @meditation.title } }, as: :json
    assert_response :success
  end

  test "should destroy meditation" do
    assert_difference("Meditation.count", -1) do
      delete meditation_url(@meditation), as: :json
    end

    assert_response :no_content
  end
end
