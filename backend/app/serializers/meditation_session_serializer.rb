class MeditationSessionSerializer < ActiveModel::Serializer
  attributes :id, :notes, :public, :duration
  has_one :user
  has_one :meditation
end
