require 'test_helper'

class SurftypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @surftype = surftypes(:one)
  end

  test "should get index" do
    get surftypes_url
    assert_response :success
  end

  test "should get new" do
    get new_surftype_url
    assert_response :success
  end

  test "should create surftype" do
    assert_difference('Surftype.count') do
      post surftypes_url, params: { surftype: { description: @surftype.description, name: @surftype.name } }
    end

    assert_redirected_to surftype_url(Surftype.last)
  end

  test "should show surftype" do
    get surftype_url(@surftype)
    assert_response :success
  end

  test "should get edit" do
    get edit_surftype_url(@surftype)
    assert_response :success
  end

  test "should update surftype" do
    patch surftype_url(@surftype), params: { surftype: { description: @surftype.description, name: @surftype.name } }
    assert_redirected_to surftype_url(@surftype)
  end

  test "should destroy surftype" do
    assert_difference('Surftype.count', -1) do
      delete surftype_url(@surftype)
    end

    assert_redirected_to surftypes_url
  end
end
