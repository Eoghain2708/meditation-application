class MeditationSession < ApplicationRecord
  belongs_to :user
  belongs_to :meditation

  scope :that_are_public, -> { where(public: true) }
end
