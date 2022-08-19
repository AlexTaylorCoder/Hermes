class CreateChannelHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :channel_histories do |t|
      t.string :name
      t.boolean :isPinned

      t.timestamps
    end
  end
end
