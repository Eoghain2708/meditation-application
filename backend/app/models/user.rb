class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  normalizes :email, with: ->(email) { email.strip.downcase }
  before_validation :set_username

  has_many :meditation_sessions, dependent: :destroy
  has_one_attached :avatar

  scope :search_users, ->(username) { where("LOWER(username) LIKE ?", "%#{username.downcase}%") if username.present? }

  def avatar_url
    return unless self.avatar.attached?
    Rails.application.routes.url_helpers.url_for(self.avatar)
  end

  private
  def set_username
    self.username = self.email.split("@").first
  end


end
