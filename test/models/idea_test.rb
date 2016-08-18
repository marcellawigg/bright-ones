require 'test_helper'

class IdeaTest < ActiveSupport::TestCase

  test "it validates presence of title" do
    idea = Idea.new(body: "boo", quality: 0)
    assert_not idea.valid?
    assert_equal ["can't be blank"], idea.errors.messages[:title]
  end

  test "it validates presence of body" do
    idea = Idea.new(title: "Hello", quality: 0)
    assert_not idea.valid?
    assert_equal ["can't be blank"], idea.errors.messages[:body]
  end

  test "truncated body shortens correctly" do
    idea = Idea.create(title: "Hello", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", quality: 0)
    assert_equal "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", idea.truncate_body
  end

  test "increase quality returns a different variable depending on option" do
    idea = Idea.create(title: "Hello", body: "Dolly", quality: 0)
    assert_equal "Swill", idea.quality
    new_quality = idea.increase_quality(1)
    assert_equal "Genius", new_quality
  end

  test "decrease quality returns a different variable depending on option" do
    idea = Idea.create(title: "Hello", body: "Dolly", quality: 2)
    assert_equal "Genius", idea.quality
    new_quality = idea.decrease_quality(1)
    assert_equal "Swill", new_quality
  end
end
