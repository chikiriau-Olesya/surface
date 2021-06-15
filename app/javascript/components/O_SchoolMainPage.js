import React from "react"
import PropTypes from "prop-types"
import M_SchoolBanner from "./M_SchoolBanner.js"
import A_H3 from "./A_H3.js"
import A_H4 from "./A_H4.js"
import M_CityPreview from "./M_CityPreview.js"
import M_PopularCity from "./M_PopularCity.js"
import O_CityCategories from "./O_CityCategories.js"
import M_BlockMore from "./M_BlockMore.js"
import 'stylesheets/O_SchoolMainPage.scss'




class O_SchoolMainPage extends React.Component {
  render() {
    return (
      <div className="main-schools-page">
        <M_SchoolBanner/>
        <A_H3
        content = "Направления">
        </A_H3>
        <div className = "popular-cities">
          <div  className = "more-cities">
            <a href = "/schoolsCities" className = "more-cities-text">
              <A_H4 color= 'A_H4--white'
                content = "+8">
              </A_H4>
              <A_H4 color= 'A_H4--white'
                content = "направлений">
              </A_H4>
            </a>
          </div>
        </div>
        <A_H3
        content = "Попробуйте серфинг, живя в городе">
        </A_H3>
      </div>
    );
  }
}

export default O_SchoolMainPage
