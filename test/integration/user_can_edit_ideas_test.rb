require './test/test_helper'

  feature "Can edit an idea" do
    scenario "new idea can successfully save" do
      idea = Idea.create(title: "Wonderful, wonderful", body: "Just so wonderful")
      visit root_path
      find("#idea-title-info").click
      find("#idea-title-info").native.send_keys("YO!")
      find("#idea-body-info").click

      visit root_path
      assert page.has_content?("YO!")

    end
  end
