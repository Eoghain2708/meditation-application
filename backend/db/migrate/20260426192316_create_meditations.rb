class CreateMeditations < ActiveRecord::Migration[8.1]
  def change
    create_table :meditations do |t|
      t.string :title
      t.string :category
      t.text :description
      t.text :benefits

      t.timestamps
    end
  end
end
