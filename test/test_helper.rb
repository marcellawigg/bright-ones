ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require "minitest/rails/capybara"
require 'factory_girl_rails'
require 'capybara/rails'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all
  include FactoryGirl::Syntax::Methods
  # Add more helper methods to be used by all tests here...
end

class ActionDispatch::IntegrationTest
  include Capybara::DSL
  include Capybara::Assertions
end
