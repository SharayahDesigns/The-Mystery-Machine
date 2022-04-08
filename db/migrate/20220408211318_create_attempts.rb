class CreateAttempts < ActiveRecord::Migration[6.1]
  def change
    create_table :attempts do |t|
      t.string :answer
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :riddle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
