import React from "react"
import PropTypes from "prop-types"
import A_SchoolContact from "./A_SchoolContact.js"

class M_SchoolContacts extends React.Component {
  render() {
    return (
      <div className="M_SchoolContacts">
        <h4>Контакты</h4>
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

        <A_SchoolContact label = {this.props.school.website}>
        </A_SchoolContact>
      </div>
    );
  }
}


export default M_SchoolContacts
