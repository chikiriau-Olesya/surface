import React from "react"
import PropTypes from "prop-types"
import M_PostView from './M_PostView.js'
import M_PostFinal from './M_PostFinal.js'

class O_PostView extends React.Component {
  render () {
    return (
      <div className='O_PostView'>
        <M_PostView post = {this.props.post} category = {this.props.category}/>
        <M_PostFinal post = {this.props.post}/>
      </div>
    );
  }
}

export default O_PostView
