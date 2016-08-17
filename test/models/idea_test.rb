require 'test_helper'

class IdeaTest < ActiveSupport::TestCase

  test "it validates presence of title" do
    idea = Idea.new(body: "boo", quality: "sludge")
    assert_not idea.valid?
    assert_equal ["can't be blank"], idea.errors.messages[:title]
  end

  test "it validates presence of body" do
    idea = Idea.new(title: "Hello", quality: "sludge")
    assert_not idea.valid?
    assert_equal ["can't be blank"], idea.errors.messages[:body]
  end
  
  test "truncated body shortens correctly" do
    idea = Idea.create(title: "Hello", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", quality: "Sludge")
  end
end
