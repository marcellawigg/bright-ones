require './test/test_helper'

  feature "Can edit an idea" do
    scenario "new idea can successfully save" do
      visit root_path
      fill_in "idea-title", with: "Gettysburg Address"
      fill_in "idea-body", with: "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal."
      click_on "Save"
      assert_equal page.status_code, 200
    end
  end
