import React from "react"
import PropTypes from "prop-types"
import A_SchoolContact from "./A_SchoolContact.js"
import A_H4 from "./A_H4.js"
import A_Btn from "./A_Btn.js"

class M_SchoolContacts extends React.Component {
  render() {
    return (
      <div className="M_SchoolContacts">
        <A_H4 className = 'heading--white'
          content = "Контакты">
        </A_H4>
        <A_SchoolContact label = {this.props.school.email} link ="mailto:">
        </A_SchoolContact>
        <A_SchoolContact label = {this.props.school.tel} link="tel:">
        </A_SchoolContact>
        <A_SchoolContact label = {this.props.school.inst} link = "https://www.instagram.com/">
        </A_SchoolContact>
        <A_SchoolContact label = {this.props.school.tg} link = "https://teleg.run/">
        </A_SchoolContact>
        <A_SchoolContact label = {this.props.school.fb} link = "https://www.facebook.com/">
        </A_SchoolContact>

        <A_Btn
          type ='button'
          buttonStyle = 'btn--main'
          buttonState = 'btn--primary'
          children ={this.props.school.website}>
          To school page
        </A_Btn>

        <A_SchoolContact label = {this.props.school.website}>
        </A_SchoolContact>
      </div>
    );
  }
}


export default M_SchoolContacts
