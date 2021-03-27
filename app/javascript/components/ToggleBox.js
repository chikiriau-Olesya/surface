import React from "react"
import PropTypes from "prop-types"
import Burger from 'images/burger.svg'
import Cross from 'images/cross.svg'

class ToggleBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}

	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}

	render() {
		let { icon, children } = this.props;
		const { opened } = this.state;

		if (opened){
			icon = <img src ={Cross}/>
		}else{
			icon = <img src ={Burger}/>
		}

		return (
			<div className="box">
				<div className="boxTitle" onClick={this.toggleBox}>
					{icon}
				</div>
				{opened && (
					<div class="boxContent">
						{children}
					</div>
				)}
			</div>
		);
	}
}

export default ToggleBox
