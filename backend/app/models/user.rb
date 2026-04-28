class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  normalizes :email, with: ->(email) { email.strip.downcase }
  before_save :set_username

  def set_username
    self.username = self.email.split("@").first
  end
end
