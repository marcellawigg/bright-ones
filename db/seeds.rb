10.times do
  Idea.create!(
    title: Faker::Hipster.word,
    body: Faker::Hipster.sentence
  )
end
