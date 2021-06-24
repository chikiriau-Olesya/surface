import React from "react"
import PropTypes from "prop-types"
import A_H4 from "./A_H4.js"
import A_Link from "./A_Link.js"
import Bc from "images/M_SchoolMore-bc.svg"
import 'stylesheets/M_SchoolMore.scss'

class M_SchoolMore extends React.Component {
  render() {
    var sectionStyle = {
      backgroundImage: `url(${Bc})`
    };
    return (
      <div style={sectionStyle} className="M_SchoolMore">
        <div className="M_SchoolMore-block">
          <div className="M_SchoolMore--text">
            <A_H4 color= 'A_H4--white'
              content = "Закончились школы? У нас есть еще волны!">
            </A_H4>
          </div>
          <A_Link
            linkStyle ='link--white'
            name = 'Перейти к городам'
            address = {'/schoolsCities'} >
          </A_Link>
        </div>
      </div>
    );
  }
}

export default M_SchoolMore
