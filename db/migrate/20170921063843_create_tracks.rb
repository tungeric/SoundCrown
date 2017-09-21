class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :track_url, null: false
      t.integer :creator_id, null: false
      t.timestamps
    end
    add_index :tracks, :title
    add_index :tracks, :creator_id
  end
end
