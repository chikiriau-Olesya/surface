import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_FunctionList.scss'
import M_CategoryMenu from './M_CategoryMenu.js'
import A_SmallList from './A_SmallList.js'
import A_DropMenu from './A_DropMenu.js'
import A_Textblock from './A_Textblock.js'
import DropArrow from 'images/droparrow.svg'




class M_DropDown extends React.Component {
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
              <div>
                <A_Textblock
                textStyle = 'text--black'
                textSize = 'text--subbody'>
                  {"Категория"}
                </A_Textblock>
                <img src={DropArrow} onClick={this.handleClick}/>
              </div>
                <div>
                {this.state.active && <M_CategoryMenu
                category={this.props.category}
                />}
                </div>
            </div>
        )
    }
}

export default M_DropDown
