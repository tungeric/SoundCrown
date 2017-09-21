class Track < ApplicationRecord
  validates :title, :track_url, :creator_id, presence: true
  validates :title, length: {maximum: 50}
  validates :description, length: {maximum: 200}

  belongs_to :creator,
    class_name: :User,
    primary_key: id,
    foreign_key: creator_id

  # paperclip
  # has_attached_file :trackFile,
  #                   default_url: ""
  # validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

end
