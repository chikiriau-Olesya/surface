import React from "react"
import PropTypes from "prop-types"
import A_Heading from "./A_Heading.js"
import A_PostImg from "./A_PostImg.js"
import A_SchoolPrice from "./A_SchoolPrice.js"
import M_SchoolFacilitiesList from "./M_SchoolFacilitiesList.js"
import 'stylesheets/M_SchoolPreview.scss'


class M_SchoolPreview extends React.Component {
  render() {
    return (
      <div className="M_SchoolPreview">
        {this.props.schools.map(school => (
            <a href={/schools/ +`${school.id}`} key={school.id} className="school_block">
              <img className="school_block_img" src={school.image.url}/>
              <div className= "school_block_text">
                <A_Heading
                headingStyle = 'heading--black'
                headingSize = 'heading--article'>
                {`${school.name}`}
                </A_Heading>
                <M_SchoolFacilitiesList school = {this.props.school}/>
                <A_SchoolPrice>
                {`${school.price}`}
                </A_SchoolPrice>
              </div>
            </a>
        ))}
      </div>
    );
  }
}




export default M_SchoolPreview
