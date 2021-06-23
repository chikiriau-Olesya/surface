import React from "react"
import PropTypes from "prop-types"
import A_Heading from "./A_Heading.js"
import A_Textblock from "./A_Textblock.js"
import A_Link from "./A_Link.js"
import M_HashtagsList from "./M_HashtagsList.js"
import A_Logo from "./A_Logo.js"


class O_Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <div className = "footer-top">
          <A_Logo
          logoStyle="logo--big-white"/>
          <A_Textblock
            textStyle = 'text--white'
            textSize = 'text--body'>
            {"Проводник к мечте о серфинге и комьюнити в реалиях города"}
          </A_Textblock>
        </div>
        <div className="footer-tags">
          <A_Heading className="footer-tags-head"
            headingStyle = 'heading--white'
            headingSize = 'heading--article'>
            {"Читать самое популярное"}
          </A_Heading>
          <M_HashtagsList className="tags"/>
        </div>

        <div className="footer-lists">
          <div className="footer-third">
            <div className="footer-section">
            <A_Textblock
              textStyle = 'text--gray'
              textSize = 'text--subbody'>
              {"Пляж"}
            </A_Textblock>
              <ul>
              <A_Link
                linkStyle ='link--white'
                name = 'Люди'
                address = {'/posts?category=1'} >
              </A_Link>
              <A_Link
                linkStyle ='link--white'
                name = 'История'
                address = {'/posts?category=2'} >
              </A_Link>
              <A_Link
                linkStyle ='link--white'
                name = 'Атмосфера'
                address = {'/posts?category=3'} >
              </A_Link>
              <A_Link
                linkStyle ='link--white'
                name = 'Полезное'
                address = {'/posts?category=5'} >
              </A_Link>
              <A_Link
                linkStyle ='link--white'
                name = 'Путешествия'
                address = {'/posts?category=6'} >
              </A_Link>
              <A_Link
                linkStyle ='link--white'
                name = 'Путешествия'
                address = {'/posts?category=7'} >
              </A_Link>
              </ul>
            </div>
            <div className="footer-section">
            <A_Textblock
              textStyle = 'text--gray'
              textSize = 'text--subbody'>
              {"Школы"}
            </A_Textblock>
            <ul>
              <A_Link
                linkStyle ='link--white'
                name = 'Список городов'
                address = {'/schoolsCities'} >
              </A_Link>
              <A_Link
                linkStyle ='link--white'
                name = 'Виды серфинга'
                address = {'/surftypes'} >
              </A_Link>
            </ul>
            </div>
            <div className="footer-section">
            <A_Textblock
              textStyle = 'text--gray'
              textSize = 'text--subbody'>
              {"Информация"}
            </A_Textblock>
            <ul>
            <A_Link
              linkStyle ='link--white'
              name = 'О проекте'
              address = {'#'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Команда'
              address = {'#'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Авторам'
              address = {'#'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Сотрудничество'
              address = {'#'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Пользовательское соглашение'
              address = {'#'} >
            </A_Link>
            </ul>
            </div>
          </div>
          <div className="footer-socials">
            <A_Textblock
              textStyle = 'text--gray'
              textSize = 'text--subbody'>
              {"Соц сети"}
            </A_Textblock>
            <ul>
            <A_Link
              linkStyle ='link--white'
              name = 'Instagram'
              address = {'#'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Facebook'
              address = {'#'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Youtube'
              address = {'#'} >
            </A_Link>
            </ul>
          </div>
        </div>
      <div className="footer-tech">
      <A_Textblock
        textStyle = 'text--gray'
        textSize = 'text--s-descript'>
        {"Все права защищены Surface © 2020"}
      </A_Textblock>
      <A_Textblock
        textStyle = 'text--gray'
        textSize = 'text--s-descript'>
        {"Изображения принадлежат их авторам"}
      </A_Textblock>
      </div>
      </div>
    );
  }
}

export default O_Footer
