import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_SchoolInfo.scss'


const IMGSRC = {
  wetsuit : '/assets/wetsuit.svg',
  flag: '/assets/flag.svg',
  thermometer: '/assets/thermometer.svg',
  wavetemp: '/assets/wavetemp.svg',
}

const A_SchoolInfo = ({
lable,
text,
img
}) => {
    // const imgName = this.getImg()
    //

    return (
      <div className="A_SchoolInfo">
        <span>{lable}</span>
        <div>
          <img src = {img}/>
          <div>{text}</div>
        </div>
       </div>
    );
}

export default A_SchoolInfo
