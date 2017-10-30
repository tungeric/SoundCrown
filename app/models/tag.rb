# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :name, :track_id, presence: true

  belongs_to :track,
    class_name: "Track",
    foreign_key: :track_id,
    primary_key: :id

end
