import React from "react"
import PropTypes from "prop-types"
import M_ToggleBox from "./M_ToggleBox.js";
import A_Sidebar from "./A_Sidebar.js";


class A_BurgerMenu extends React.Component {

  render() {
    return (
          <M_ToggleBox>
            <A_Sidebar />
          </M_ToggleBox>
    );
  }
}

export default A_BurgerMenu
