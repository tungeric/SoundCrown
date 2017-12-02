class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy
  has_many :tracks, through: :taggings

  def find_by_name(name)
    tag = Tag.find_by(name: name)
    tag ? tag : nil
  end
end
