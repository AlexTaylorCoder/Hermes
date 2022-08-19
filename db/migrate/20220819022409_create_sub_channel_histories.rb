class CreateSubChannelHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :sub_channel_histories do |t|
      t.string :post
      t.integer :likes

      t.timestamps
    end
  end
end
