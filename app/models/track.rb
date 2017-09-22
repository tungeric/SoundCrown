# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#

class Track < ApplicationRecord
  validates :title, :creator_id, presence: true
  validates :title, length: {maximum: 50}
  validates :description, length: {maximum: 200}

  belongs_to :creator,
    class_name: "User",
    foreign_key: :creator_id,
    primary_key: :id

  # paperclip
  has_attached_file :audio, presence: true
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\z/
  # validates_attachment_content_type :audio,
  #   :content_type => [ 'audio/mpeg',
  #                      'audio/x-mpeg',
  #                      'audio/mp3',
  #                      'audio/x-mp3',
  #                      'audio/mpeg3',
  #                      'audio/x-mpeg3',
  #                      'audio/mpg',
  #                      'audio/x-mpg',
  #                      'audio/x-mpegaudio' ]
 validates_with AttachmentSizeValidator, attributes: :audio, less_than: 40.megabytes
end
