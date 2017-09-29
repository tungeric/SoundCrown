# == Schema Information
#
# Table name: tracks
#
#  id                     :integer          not null, primary key
#  title                  :string           not null
#  creator_id             :integer          not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  description            :string
#  audio_file_name        :string
#  audio_content_type     :string
#  audio_file_size        :integer
#  audio_updated_at       :datetime
#  cover_art_file_name    :string
#  cover_art_content_type :string
#  cover_art_file_size    :integer
#  cover_art_updated_at   :datetime
#  plays                  :integer          default(0)
#

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
