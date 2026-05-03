# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_04_29_213427) do
  create_table "meditation_sessions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.integer "duration"
    t.integer "meditation_id", null: false
    t.text "notes"
    t.boolean "public", default: false, null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.index [ "meditation_id" ], name: "index_meditation_sessions_on_meditation_id"
    t.index [ "user_id" ], name: "index_meditation_sessions_on_user_id"
  end

  create_table "meditations", force: :cascade do |t|
    t.text "benefits"
    t.string "category"
    t.datetime "created_at", null: false
    t.text "description"
    t.text "technique"
    t.string "title"
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.text "bio"
    t.datetime "created_at", null: false
    t.string "email"
    t.string "password_digest"
    t.datetime "updated_at", null: false
    t.string "username"
  end

  add_foreign_key "meditation_sessions", "meditations"
  add_foreign_key "meditation_sessions", "users"
end
