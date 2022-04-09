# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :rooms, dependent: :destroy
  has_many :riddles, through: :attempts

# def self.profile (userId)
#   Riddle.where(: id).sum(:level)
#   # select("users.id, users.name, users.image, a.riddle_id, r.level AS points")
#   # .joins("INNER JOIN attempts AS a ON users.id = a.user_id
#   # INNER JOIN riddles AS r ON a.riddle_id = r.id")
#   # .group("users.id")
# end

def self.profiles
  User.find_by_sql("SELECT u.id, u.name, u.email, u.image, SUM(r.level) AS points
  FROM users AS u
  INNER JOIN attempts AS a ON u.id = a.user_id
  INNER JOIN riddles AS r ON a.riddle_id = r.id
GROUP BY u.id")
end

# def self.profile(id)
#   User.find_by_sql("SELECT u.id, u.name, u.email, u.image, SUM(r.level) AS points
#   FROM users AS u
#   INNER JOIN attempts AS a ON u.id = a.user_id
#   INNER JOIN riddles AS r ON a.riddle_id = r.id
#   WHERE u.id = ?
# GROUP BY u.id", id)
# end

extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
end
