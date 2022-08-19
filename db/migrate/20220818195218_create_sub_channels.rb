class CreateSubChannels < ActiveRecord::Migration[7.0]
  def change
    create_table :sub_channels do |t|
      t.string :message
      t.integer :likes

      t.timestamps
    end
  end
end
