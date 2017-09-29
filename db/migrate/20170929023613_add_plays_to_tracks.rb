class AddPlaysToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :plays, :integer, default: 0
    add_index :tracks, :plays
  end
end
