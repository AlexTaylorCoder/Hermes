class CreateMessageHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :message_histories do |t|
      t.integer :user_history_id
      t.integer :channel_history_id
      t.string :post
      t.boolean :isPinned
      t.integer :likes
      t.integer :sub_channel_history_id

      t.timestamps
    end
  end
end
