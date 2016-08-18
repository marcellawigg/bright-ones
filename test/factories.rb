FactoryGirl.define do
  factory :idea do
    title { Faker::Hipster.word }
    body { Faker::Hipster.sentence }
    quality 0
  end
end
