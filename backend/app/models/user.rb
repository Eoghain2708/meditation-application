class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  normalizes :email, with: ->(email) { email.strip.downcase }
  before_validation :set_username

  has_many :meditation_sessions, dependent: :destroy

  private
  def set_username
    self.username = self.email.split("@").first
  end
end
