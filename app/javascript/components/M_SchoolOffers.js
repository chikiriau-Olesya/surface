import React from "react"
import PropTypes from "prop-types"
import A_SchoolOffer from './A_SchoolOffer.js'

class M_SchoolOffers extends React.Component {
  render () {
    return (
      <div className="M_SchoolOffers">
        <h4>Примеры услуг</h4>
          <A_SchoolOffer text = {this.props.school.service}>
          </A_SchoolOffer>
      </div>
    );
  }
}

export default M_SchoolOffers
