class MeditationSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :description, :technique, :benefits
end
