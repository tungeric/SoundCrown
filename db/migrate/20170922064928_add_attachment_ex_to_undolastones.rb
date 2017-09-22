class AddAttachmentExToUndolastones < ActiveRecord::Migration[5.1]
  def self.up
    remove_attachment :tracks, :audio_file
  end

  def self.down
    add_attachment :tracks, :audio_file
  end
end
