import React from "react"
import PropTypes from "prop-types"
import TestSchool from 'images/testSchool.png'
import 'stylesheets/A_SchoolGalery.scss'

class A_SchoolGalery extends React.Component {
  render () {
    return (
      <div className='A_SchoolGalery'>
        <img src={TestSchool}></img>
      </div>
    );
  }
}

export default  A_SchoolGalery
