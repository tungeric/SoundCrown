class AddAttachmentCoverArtToTracks < ActiveRecord::Migration[5.1]
  def self.up
    change_table :tracks do |t|
      t.attachment :cover_art
    end
  end

  def self.down
    remove_attachment :tracks, :cover_art
  end
end
