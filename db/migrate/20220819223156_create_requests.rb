class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.string :message
      t.string :status
      t.integer :member_id
      t.integer :user_id

      t.timestamps
    end
  end
end
