class CreateRequestHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :request_histories do |t|
      t.string :message
      t.string :status
      t.integer :member_history_id
      t.integer :user_history_id

      t.timestamps
    end
  end
end
