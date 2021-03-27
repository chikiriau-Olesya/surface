import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Sidebar.scss'
import A_Heading from './A_Heading.js'
import Insta from 'images/insta.svg'
import Fb from 'images/fb.svg'
import Telega from 'images/telega.svg'

class A_Sidebar extends React.Component {
  render () {
    return (
      <div className="sidebar">
      <div className="sidebar-beach">
        <A_Heading className="post-title"
        headingStyle = 'heading--black'
        headingSize = 'heading--h3'>
        {"Пляж"}
        </A_Heading>
        <ul>
          <li>Люди</li>
          <li>История</li>
          <li>Атмосфера</li>
          <li>Полезное</li>
          <li>Шорты-стори</li>
        </ul>
      </div>

      <div className="sidebar-shools">
        <A_Heading className="post-title"
        headingStyle = 'heading--black'
        headingSize = 'heading--h3'>
        {"Школы"}
        </A_Heading>
        <ul>
          <li>Города</li>
          <li>Виды серфинга</li>
        </ul>
      </div>

      <div className="sidebar-additional">
        <div className="media-links">
           <a href="https://www.instagram.com/trinitysurfingmag/"><img src={Insta}/></a>
           <a href="https://www.instagram.com/trinitysurfingmag/"><img src={Fb}/></a>
           <a href="https://www.instagram.com/trinitysurfingmag/"><img src={Telega}/></a>
        </div>
        <div className="sidebar-tech-links">
          <a href="/">О проете</a>
          <a href="/">Команда</a>
          <a href="/">Авторам</a>
        </div>
        <a href="/"> Политика конфиденциальности</a>
        <p>Surface © 2020 </p>

      </div>

      </div>
    );
  }
}

export default A_Sidebar
