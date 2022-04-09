class Riddle < ApplicationRecord
  belongs_to :room
  has_many :attempts, dependent: :destroy

  
end
