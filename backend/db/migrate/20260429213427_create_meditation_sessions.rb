class CreateMeditationSessions < ActiveRecord::Migration[8.1]
  def change
    create_table :meditation_sessions do |t|
      t.references :user, null: false, foreign_key: true
      t.references :meditation, null: false, foreign_key: true
      t.text :notes
      t.boolean :public, default: false, null: false
      t.integer :duration

      t.timestamps
    end
  end
end
