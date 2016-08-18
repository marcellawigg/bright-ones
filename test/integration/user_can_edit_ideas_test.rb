require './test/test_helper'

  feature "Can edit an idea" do
    scenario "new idea can successfully save" do
      idea = Idea.create(title: "Wonderful, wonderful", body: "Just so wonderful")
      visit root_path
    end
  end
