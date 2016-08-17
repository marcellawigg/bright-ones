class ChangeColumnDefaultForIdeas < ActiveRecord::Migration[5.0]
  def change
    change_column_default(:ideas, :quality, "Swill")
  end
end
