import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Sidebar.scss'
import A_Heading from './A_Heading.js'
import A_H4 from './A_H4.js'
import A_H5 from './A_H5.js'
import A_Link from './A_Link.js'
import Insta from 'images/insta.svg'
import Fb from 'images/fb.svg'
import Telega from 'images/telega.svg'
import Search from "images/search_icon.svg"


class A_Sidebar extends React.Component {
  render () {
    return (
    <div className="sidebar">
    <div className="sidebar-search-item">
      <a href="/searchPage" className="sidebar-search">
       <img src={Search}/>
       <p>Поиск</p>
      </a>
    </div>
      <div className="sidebar-beach">
        <a href="/posts">
          <A_H4 color="A_H4--black"
            content = "Пляж">
          </A_H4>
        </a>
        <ul>
        <A_Link
          linkStyle ='link--black'
          name = 'Люди'
          address = {'/posts?category=1'} >
        </A_Link>
        <A_Link
          linkStyle ='link--black'
          name = 'История'
          address = {'/posts?category=2'} >
        </A_Link>
        <A_Link
          linkStyle ='link--black'
          name = 'Атмосфера'
          address = {'/posts?category=3'} >
        </A_Link>
        <A_Link
          linkStyle ='link--black'
          name = 'Полезное'
          address = {'/posts?category=4'} >
        </A_Link>
        <A_Link
          linkStyle ='link--black'
          name = 'Путешествия'
          address = {'/posts?category=5'} >
        </A_Link>
        <A_Link
          linkStyle ='link--black'
          name = 'Шорт-ы'
          address = {'/posts?category=6'} >
        </A_Link>
        </ul>
      </div>

      <div className="sidebar-shools">
      <a href="/schoolsMain">
        <A_H4 color="A_H4--black"
          content = "Школы">
        </A_H4>
      </a>
      <ul>
      <A_Link
        linkStyle ='link--black'
        name = 'Города'
        address = {'/schoolsCities'} >
      </A_Link>
      <A_Link
        linkStyle ='link--black'
        name = 'Школы'
        address = {'/schoolsMain'} >
      </A_Link>
      </ul>
    </div>

      <div className="sidebar-additional">
        <div className="media-links">
           <a href="https://www.instagram.com/trinitysurfingmag/"><img src={Insta}/></a>
           <a href="https://www.instagram.com/trinitysurfingmag/"><img src={Fb}/></a>
           <a href="https://www.instagram.com/trinitysurfingmag/"><img src={Telega}/></a>
        </div>
        <div className="sidebar-tech-links">
          <a href="/">О проекте</a>
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
