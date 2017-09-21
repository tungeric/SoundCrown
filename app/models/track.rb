class Track < ApplicationRecord
  validates :title, :track_url, :creator_id, presence: true
  validates :title, length: {maximum: 50}
  validates :description, length: {maximum: 200}

  belongs_to :creator,
    class_name: :User,
    primary_key: id,
    foreign_key: creator_id

end
