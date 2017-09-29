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

  has_many :comments,
    class_name: "Comment",
    foreign_key: :track_id,
    primary_key: :id

  # paperclip
  has_attached_file :audio,
                    # url: ":s3_us_west_url",
                    # you can specify s3_credentials file here!
                    presence: true
  validates_attachment_content_type :audio,
                                    content_type: /\Aaudio\/.*\z/,
                                    :storage => :s3,
                                    :bucket => ENV["s3_bucket"]
                                    # :path => ":env_folder/LOOKATMENOW/:attachment/:id/:style/:filename.:extension"
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

 has_attached_file :cover_art,
                   default_url: "http://res.cloudinary.com/dfafbqoxx/image/upload/v1505940306/soundcrown-logo_ueiofl.jpg"
 validates_attachment_content_type :cover_art, content_type: /\Aimage\/.*\Z/


 private

 # interpolate in paperclip
 Paperclip.interpolates :env_folder  do |attachment, style|
   Rails.env.production? ? 'production' : 'development'
 end


end
