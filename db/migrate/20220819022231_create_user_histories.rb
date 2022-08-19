class CreateUserHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :user_histories do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.string :username
      t.string :prof
      t.string :bio

      t.timestamps
    end
  end
end
