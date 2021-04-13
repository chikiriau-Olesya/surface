import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_FunctionList.scss'
import A_Link from './A_Link.js'
import A_SmallList from './A_SmallList.js'
import Dots from 'images/dots.svg'



class M_FunctionList extends React.Component {
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
                <img src={Dots} onClick={this.handleClick}/>
                  <div>{this.state.active &&
                    <div className="admin-actions">
                      <a href={"#"} className="action-edit">Редактировать</a>
                      <a href = {"#"} className="action-delete">Удалить</a>
                    </div>}
                </div>
            </div>
        )
    }
}

export default M_FunctionList
