require 'test_helper'

class TaggingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get taggings_create_url
    assert_response :success
  end

  test "should get destroy" do
    get taggings_destroy_url
    assert_response :success
  end

end
