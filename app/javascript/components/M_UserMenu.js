import React from "react"
import PropTypes from "prop-types"

import A_RegistrationBtn from "./A_RegistrationBtn.js";
import 'stylesheets/M_UserMenu.scss'
import A_Link from './A_Link.js'
import A_SmallList from './A_SmallList.js'
import Profile from "images/avatar.svg"



class M_UserMenu extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            active: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <div className= "admin-actions-menu">
                <img src={Profile} onClick={this.handleClick}/>
                <div>{this.state.active &&
                    <div className="admin-links">
                      <A_Link className="admin-links-item" linkStyle = 'link--black' address="/users/1" name="Профиль" />
                      <A_Link className="admin-links-item" linkStyle = 'link--black' address = "/admin" name="Мастерская" />
                      <A_Link className="admin-links-item" linkStyle = 'link--black' address = "/about" name="О сервисе" />
                      <A_RegistrationBtn className="admin-links-item" />
                    </div>}
                </div>
            </div>
        )
    }
}

export default M_UserMenu
