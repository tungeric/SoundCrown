class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy
  has_many :tracks, through: :taggings
end
