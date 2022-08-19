class CreateMessageMerges < ActiveRecord::Migration[7.0]
  def change
    create_table :message_merges do |t|
      t.integer :message_id
      t.integer :sub_channel_id

      t.timestamps
    end
  end
end
