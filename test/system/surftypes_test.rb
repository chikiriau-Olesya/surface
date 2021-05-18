require "application_system_test_case"

class SurftypesTest < ApplicationSystemTestCase
  setup do
    @surftype = surftypes(:one)
  end

  test "visiting the index" do
    visit surftypes_url
    assert_selector "h1", text: "Surftypes"
  end

  test "creating a Surftype" do
    visit surftypes_url
    click_on "New Surftype"

    fill_in "Description", with: @surftype.description
    fill_in "Name", with: @surftype.name
    click_on "Create Surftype"

    assert_text "Surftype was successfully created"
    click_on "Back"
  end

  test "updating a Surftype" do
    visit surftypes_url
    click_on "Edit", match: :first

    fill_in "Description", with: @surftype.description
    fill_in "Name", with: @surftype.name
    click_on "Update Surftype"

    assert_text "Surftype was successfully updated"
    click_on "Back"
  end

  test "destroying a Surftype" do
    visit surftypes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Surftype was successfully destroyed"
  end
end
