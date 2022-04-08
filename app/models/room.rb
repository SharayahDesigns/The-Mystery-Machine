class Room < ApplicationRecord
  belongs_to :user
  has_many :riddles, dependent: :destroy

end
