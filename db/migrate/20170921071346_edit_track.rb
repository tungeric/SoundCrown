class EditTrack < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :track_url
    add_column :tracks, :description, :string
  end
end
