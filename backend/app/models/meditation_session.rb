class MeditationSession < ApplicationRecord
  belongs_to :user
  belongs_to :meditation

  scope :public, ->(session) { where(public: true) }
end
