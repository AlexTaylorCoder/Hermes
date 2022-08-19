class CreateMemberHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :member_histories do |t|
      t.boolean :isAdmin
      t.integer :user_history_id
      t.integer :channel_history_id

      t.timestamps
    end
  end
end
