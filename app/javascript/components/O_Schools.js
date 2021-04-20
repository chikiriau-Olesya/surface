import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/O_Schools.scss'
import M_MainMap from './M_MainMap.js'
import M_SchoolPreview from './M_SchoolPreview.js'


class O_Schools extends React.Component {
  render () {
    return (
      <div className="O_Schools">
        <div className="block_schools">
          <M_SchoolPreview
            schools = {this.props.schools}
            school = {this.props.school}
            />
        </div>
        <div className="block">
          <M_MainMap/>
        </div>
      </div>
    );
  }
}

export default O_Schools
