import React from "react"
import PropTypes from "prop-types"
import "stylesheets/M_Header.scss"
import ToggleBox from "./ToggleBox.js";
import A_Sidebar from "./A_Sidebar.js";
import Logo from "images/logo.svg"
import Burger from "images/burger.svg"
import Profile from "images/avatar.svg"

class M_Header extends React.Component {

  render() {
    return (
      <div className="header-ext">
      <ToggleBox>
        <A_Sidebar />
      </ToggleBox>
        <div className="header">
          <div className="header--left">
            <a href="/posts">
            <img
            className="logo"
            src={Logo}/>
            </a>

            <a href="/posts">Пляж</a>
            <a href="/schools">Школы</a>

          </div>

          <div className="header--right">
            <a href="/users"><img src={Profile}/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default M_Header
