# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

require 'faker'


User.destroy_all
Meditation.destroy_all


10.times do
  User.create!(
    email: Faker::Internet.email,
    password: 'password123',
    password_confirmation: 'password123'
  )

  rand(2..5).times do
    Meditation.create!(
      title: Faker::Lorem.words(number: 3).join(' ').titleize, # Random meditation title
      category: [ "vipassana", "metta", "samatha", "inquiry", "combo" ].sample, # Random category
      description: Faker::Lorem.paragraph(sentence_count: 5), # Random description
      technique: Faker::Lorem.words(number: 100).join(' ').titleize, # Random technique
      benefits: Faker::Lorem.paragraph(sentence_count: 3), # Random benefits (optional)
    )
  end
end

puts "Created #{User.count} users."
puts "Created #{Meditation.count} meditations."
