class Meditation < ApplicationRecord
  CATEGORIES = {
    vipassana: "vipassana",
    samatha: "samatha",
    metta: "metta",
    inquiry: "inquiry",
    jhana: "jhana",
    mindfulness: "mindfulness",
    combo: "combo"
}.freeze

  def self.categories
    CATEGORIES.values
  end

  validates :title, uniqueness: true, presence: true
  validates :category, presence: true, inclusion: { in: CATEGORIES.values }
  normalizes :category, with: ->(category) { category.strip.downcase }
  validates :description, presence: true
  validates :technique, presence: true

  scope :search_title, ->(title) { where("title LIKE ?", "%#{title.downcase}%") if title.present? }
  scope :filter_by_category, ->(category) { where(category: category.downcase) if category.present? }
end
