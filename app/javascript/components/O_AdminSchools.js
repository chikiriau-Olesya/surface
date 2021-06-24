import React from "react"
import PropTypes from "prop-types"
import A_Heading from "./A_Heading.js"
import A_PostImg from "./A_PostImg.js"
import A_Btn from "./A_Btn.js"
import A_H3 from "./A_H3.js"
import A_SchoolPrice from "./A_SchoolPrice.js"
import M_SchoolFacilitiesList from "./M_SchoolFacilitiesList.js"
import 'stylesheets/M_SchoolPreview.scss'

class O_AdminSchools extends React.Component {
  render() {
    return (
      <div className="O_AdminSchools">
        <div className="admin-top-line">
          <A_H3 className = 'heading--black'
            content = "Серфшколы">
          </A_H3>
          <a href="/schools/new">
            <A_Btn
            buttonStyle = 'btn--main'
            buttonState = 'btn--primary'>
            {"Создать школу"}
            </A_Btn>
          </a>
        </div>
        {this.props.schools.map(school => (
          <div className= "school_block">
            <a href={/schools/ +`${school.id}`} key={school.id} className="">
              <img className="school_block_img" src={school.image.url}/>
              <div className= "school_block_text">
                <A_Heading
                headingStyle = 'heading--black'
                headingSize = 'heading--article'>
                {`${school.name}`}
                </A_Heading>
                <M_SchoolFacilitiesList school = {school}/>
                <A_SchoolPrice>
                {`${school.price}`}
                </A_SchoolPrice>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default O_AdminSchools
