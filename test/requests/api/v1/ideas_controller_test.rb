require 'test_helper'

class Api::V1::IdeasControllerTest < ActionDispatch::IntegrationTest
  test "should get a list of ideas" do
    get "/api/v1/ideas.json"
    assert_response :success
    ideas = JSON.parse(response.body)
  end

  test "can create a new idea" do
    idea_params = { title: "Test idea", body: "Idea body", quality: "swill" }
    post "/api/v1/ideas.json", params: {idea: idea_params}
    assert_response :success
    parsed_idea = JSON.parse(response.body)["idea"]
      idea = Idea.last
      assert_equal idea.id, parsed_idea["id"]
      assert_equal idea.title, parsed_idea["title"]
      assert_equal idea.body, parsed_idea["body"]
      assert_equal idea.quality, parsed_idea["quality"]
  end

  test "can update an existing idea" do
    idea = create(:idea)
    id = idea.id
    put "/api/v1/ideas/#{id}", params: {idea: {title: "Honky-Tonk", body: "groovy"}}
    updated_idea = Idea.find(id)
    assert_response :success
    assert_equal updated_idea.title, "Honky-Tonk"
    assert_equal updated_idea.body, "groovy"
  end

  test "can destroy an existing idea" do
    idea1, idea2 = create_list(:idea, 2)
    assert_equal 2, Idea.count
    id = idea1.id
    delete "/api/v1/ideas/#{id}"
    assert_equal 1, Idea.count
  end
end
