import React from "react"
import PropTypes from "prop-types"
import A_SchoolContact from "./A_SchoolContact.js"
import A_H4 from "./A_H4.js"
import A_Link from "./A_Link.js"
import InstaSmall from 'images/insta_icon_small.svg'
import FbSmall from 'images/fb_icon_small.svg'
import TgSmall from 'images/tg_icon_small.svg'
import 'stylesheets/M_SchoolContacts.scss'


class M_SchoolContacts extends React.Component {
  render() {
    return (
      <div className="M_SchoolContacts">
        <A_H4
          color = 'A_H4--white'
          content = "Контакты">
        </A_H4>
        <div className="M_SchoolContacts-block">
          <A_SchoolContact
            label = {this.props.school.email}
            link ="mailto:">
          </A_SchoolContact>
          <A_SchoolContact
            label = {this.props.school.tel}
            link="tel:">
          </A_SchoolContact>
          <A_SchoolContact
            img = {InstaSmall}
            label = {this.props.school.inst}
            link = "https://www.instagram.com/">
          </A_SchoolContact>
          <A_SchoolContact
            img = {FbSmall}
            label = {this.props.school.tg}
            link = "https://teleg.run/">
          </A_SchoolContact>
          <A_SchoolContact
            img = {TgSmall}
            label = {this.props.school.fb}
            link = "https://www.facebook.com/">
          </A_SchoolContact>
        </div>
        <div className="M_SchoolContacts-link">
          <A_Link
            linkStyle ='link--blue'
            name = 'Перейти на сайт школы'
            address = {this.props.school.website} >
          </A_Link>
        </div>
      </div>
    );
  }
}


export default M_SchoolContacts
