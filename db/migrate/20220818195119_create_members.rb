class CreateMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :members do |t|
      t.integer :user_id
      t.integer :channel_id
      t.boolean :isAdmin

      t.timestamps
    end
  end
end
