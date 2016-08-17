class Idea < ActiveRecord::Base
  validates_presence_of :title
  validates_presence_of :body
  enum quality: [:Swill, :Plausible, :Genius]

  def truncate_body
    if body.length > 100
      last_space = body[0..99].rindex(' ')
      body[0..(last_space - 1)]
    else
      body
    end
  end

  def change_quality(data)
  quality_options = ["Swill", "Plausible", "Genius"]
  index = quality_options.index(self.quality)
  if data == "increase"
    increase_quality(index)
  elsif data == "decrease"
    decrease_quality(index)
  else
  end
end

def increase_quality(index)
  quality_options = ["Swill", "Plausible", "Genius"]
  if index == 2
    new_quality = quality_options[index]
  else
    new_quality = quality_options[index + 1]
  end
  new_quality
end

def decrease_quality(index)
  quality_options = ["Swill", "Plausible", "Genius"]
  if index == 0
    new_quality = quality_options[index]
  else
    new_quality = quality_options[index - 1]
  end
  new_quality
end

end
