require './test/test_helper'

class RootPageShowsAllIdeasTest < Capybara::Rails::TestCase

  def test_root_page_has_ideas
    idea1, idea2, idea3 = create_list(:idea, 3)
    visit '/'
    assert_equal 200, page.status_code
    assert page.has_content?("Title: " + idea1.title)
    assert page.has_content?("Body: " + idea2.body)
    assert page.has_content?("Quality: " + idea3.quality)
  end
end
