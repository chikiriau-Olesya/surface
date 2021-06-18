import React from "react"
import PropTypes from "prop-types"
import A_Heading from "./A_Heading.js"
import A_H3 from "./A_H3.js"
import A_PostImg from "./A_PostImg.js"
import A_SchoolPrice from "./A_SchoolPrice.js"
import M_SchoolFacilitiesList from "./M_SchoolFacilitiesList.js"
import 'stylesheets/M_SchoolPreview.scss'
import 'stylesheets/M_SchoolPreviewSmall.scss'


class M_SchoolPreviewSmall extends React.Component {
  render() {
    return (
      <div className="M_SchoolPreviewSmall">
        <div className = "main--title">
          <A_H3
          color ="A_H3--black"
          content = "Пора взять в руки доску">
           </A_H3>
        </div>
        <div className="M_SchoolPreviewSmall--blocks">
          {this.props.schools.slice(0, 3).map(school => (
            <div className= "school_block__small">
              <a href={/schools/ +`${school.id}`} key={school.id} className="">
                <img className="school_block_img__small" src={school.image.url}/>
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
      </div>
    );
  }
}

export default M_SchoolPreviewSmall
