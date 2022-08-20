class CreateMessageMergeHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :message_merge_histories do |t|
      t.integer :message_history_id
      t.integer :sub_channel_history_id

      t.timestamps
    end
  end
end
