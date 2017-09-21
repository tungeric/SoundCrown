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
  # has_attached_file :trackFile,
  #                   default_url: ""
  # validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

end
