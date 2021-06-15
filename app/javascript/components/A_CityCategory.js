import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_CityCategory.scss'

const STYLES = [
  'city--default',
  'city--long',
  'city--square',
]

const SIZES = [
  'category--default',
  'category--active',
  'category--inPost',
  'category--inArticle'
]

const A_CityCategory = ({
city,
textpart,
schoolNumber,
cityStyle,
citySize
}) => {

  const checkCityStyle = STYLES.includes(cityStyle)
  ? cityStyle : STYLES[0]

  const checkCitySizes = SIZES.includes(citySize)
  ? cityStyle : SIZES[0]


  return (
    <a href={`/schools?city=${city}`}>
      {textpart}
      {schoolNumber}
    </a>
  );
}


export default A_CityCategory
