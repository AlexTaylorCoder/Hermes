class Messagehasmember < ActiveRecord::Migration[7.0]
  def change
    add_column :messages, :member_id, :integer
  end
end
