class Requestbelongschannel < ActiveRecord::Migration[7.0]
  def change
    add_column :requests, :channel_id, :integer
  end
end
