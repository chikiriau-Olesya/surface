import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import 'stylesheets/A_H3.scss'

class M_SchoolFound extends React.Component {
  render () {
    return (
      <div className="M_SchoolFound">
        <div className="schoolFound__text">
          <A_H3 className = 'A_H3--white'
            content = "Серфшколы">
          </A_H3>
        </div>
      </div>
    );
  }
}

export default M_SchoolFound
