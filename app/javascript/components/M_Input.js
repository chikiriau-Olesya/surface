import React from "react"
import PropTypes from "prop-types"
import './m_input.css'
import A_Input from './A_Input.js'
import A_Button from './A_Button.js'


class M_Input extends React.Component {
  render () {
    return (
      <div className='extendedInput'>

        <div className='inputBtn'>
          <A_Input/>
          <A_Button
          </A_Button>
        </div>

    </div>
    );
  }
}

export default M_Input
