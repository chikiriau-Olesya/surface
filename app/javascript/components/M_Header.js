import React from "react"
import PropTypes from "prop-types"
import "stylesheets/M_Header.scss"
import M_ToggleBox from "./M_ToggleBox.js";
import A_Sidebar from "./A_Sidebar.js";
import Logo from "images/logo.svg"
import Burger from "images/burger.svg"
import Profile from "images/avatar.svg"
import Search from "images/search_icon.svg"

class M_Header extends React.Component {

  render() {
    return (
      <header className="header-ext">
        <div className="header-ext-inner">
          <M_ToggleBox>
            <A_Sidebar />
          </M_ToggleBox>
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
              <a className="header--right-search" href="/searchPage"><img src={Search}/></a>
              <a className="header--right-profile" href="/users"><img src={Profile}/></a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default M_Header
