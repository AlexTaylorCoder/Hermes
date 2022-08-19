class Addsubchannelidtomessage < ActiveRecord::Migration[7.0]
  def change
    add_column :messages, :sub_channel_id, :integer
  end
end
