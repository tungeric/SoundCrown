class Tagging < ApplicationRecord
  belongs_to :tag, validate: true
  belongs_to :track, validate: true
end
