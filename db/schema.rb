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

ActiveRecord::Schema[7.0].define(version: 2022_08_19_223156) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_histories", force: :cascade do |t|
    t.string "name"
    t.boolean "isPinned"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "channels", force: :cascade do |t|
    t.string "name"
    t.boolean "isPinned"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "member_histories", force: :cascade do |t|
    t.boolean "isAdmin"
    t.integer "user_history_id"
    t.integer "channel_history_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "members", force: :cascade do |t|
    t.integer "user_id"
    t.integer "channel_id"
    t.boolean "isAdmin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "message_histories", force: :cascade do |t|
    t.integer "user_history_id"
    t.integer "channel_history_id"
    t.string "post"
    t.boolean "isPinned"
    t.integer "likes"
    t.integer "sub_channel_history_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "message_merges", force: :cascade do |t|
    t.integer "message_id"
    t.integer "sub_channel_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.integer "user_id"
    t.integer "channel_id"
    t.string "post"
    t.boolean "isPinned"
    t.integer "likes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sub_channel_id"
  end

  create_table "requests", force: :cascade do |t|
    t.string "message"
    t.string "status"
    t.integer "member_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sub_channel_histories", force: :cascade do |t|
    t.string "post"
    t.integer "likes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sub_channels", force: :cascade do |t|
    t.string "post"
    t.integer "likes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_histories", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "username"
    t.string "prof"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "username"
    t.string "prof"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
