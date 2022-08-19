class Changenamecol < ActiveRecord::Migration[7.0]
  def change
    rename_column :messages, :message, :post
    rename_column :sub_channels, :message, :post
  end
end
