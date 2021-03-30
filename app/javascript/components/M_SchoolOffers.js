import React from "react"
import PropTypes from "prop-types"
import A_SchoolOffer from './A_SchoolOffer.js'
import A_H4 from "./A_H4.js"

class M_SchoolOffers extends React.Component {
  render () {
    return (
      <div className="M_SchoolOffers">
        <A_H4 className = 'heading--black'
          content = "Примеры услуг">
        </A_H4>
          <A_SchoolOffer text = {this.props.school.service}>
          </A_SchoolOffer>
      </div>
    );
  }
}

export default M_SchoolOffers
