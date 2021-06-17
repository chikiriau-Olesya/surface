import React from "react"
import PropTypes from "prop-types"
import A_SchoolOffer from './A_SchoolOffer.js'
import A_H4 from "./A_H4.js"
import A_Link from "./A_Link.js"

class M_SchoolOffers extends React.Component {
  render () {
    return (
      <div className="M_SchoolOffers">
        <A_H4
          color = 'A_H4--white'
          content = "Примеры услуг">
        </A_H4>
        <div className="M_SchoolOffers_link">
          <A_Link
            linkStyle ='link--grey'
            name = 'Подробнее на сайте школы'
            address = {this.props.school.website} >
          </A_Link>
        </div>
        <div className="M_SchoolOffers_table">
          <A_SchoolOffer text = {this.props.school.service}>
          </A_SchoolOffer>
        </div>
      </div>
    );
  }
}

export default M_SchoolOffers
