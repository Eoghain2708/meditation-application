class MeditationSessionSerializer < ActiveModel::Serializer
  attributes :id, :notes, :public, :duration, :created_at
  has_one :user
  has_one :meditation

  def user
    {
      id: object.user_id,
      username: object.user.username
    }
  end

  def meditation
    {
      id: object.meditation_id,
      title: object.meditation.title,
      category: object.meditation.category,
      created_at: object.created_at
    }
  end
end
