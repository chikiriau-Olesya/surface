import React from "react"
import PropTypes from "prop-types"
// import './A_SchoolInfo.css'
import A_SchoolInfo from './A_SchoolInfo.js'
import Flag from 'images/flag.svg'
import Wind from 'images/thermometer.svg'
import Water from 'images/wavetemp.svg'
import Wetsuit from 'images/wetsuit.svg'

class M_SchoolInf extends React.Component {
  render () {
    return (
      <div className="M_SchoolInf">
        <h4>Лучший сезон</h4>
        <div className="A_SchoolInf-block">
          <div className="A_SchoolInf-block-column">
            <A_SchoolInfo lable = "Сезон" text = {this.props.school.season} img = {Flag}>
            </A_SchoolInfo>
            <A_SchoolInfo lable = "Температура воздуха" text = {this.props.school.wind} img = {Wind}>
            </A_SchoolInfo>
          </div>
          <div className="A_SchoolInf-block-column">
            <A_SchoolInfo lable = "Температура воды" text = {this.props.school.water} img = {Water}>
            </A_SchoolInfo>
            <A_SchoolInfo lable = "Толщина гидрика" text = {this.props.school.wetsuit} img = {Wetsuit}>
            </A_SchoolInfo>
          </div>
        </div>

      </div>
    );
  }
}

export default M_SchoolInf
