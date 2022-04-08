class CreateRiddles < ActiveRecord::Migration[6.1]
  def change
    create_table :riddles do |t|
      t.text :question
      t.integer :level
      t.string :image
      t.string :answer
      t.string :option1
      t.string :option2
      t.string :option3
      t.string :option4
      t.belongs_to :room, null: false, foreign_key: true

      t.timestamps
    end
  end
end
