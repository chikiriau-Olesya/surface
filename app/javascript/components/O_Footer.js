import React from "react"
import PropTypes from "prop-types"
import A_Heading from "./A_Heading.js"
import A_Textblock from "./A_Textblock.js"
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
                <a href = "#">История</a>
                <a href = "#">Атмосфера</a>
                <a href = "#">Люди</a>
                <a href = "#">Полезное</a>
                <a href = "#">Шорт-ы стори</a>
              </ul>
            </div>
            <div className="footer-section">
            <A_Textblock
              textStyle = 'text--gray'
              textSize = 'text--subbody'>
              {"Школы"}
            </A_Textblock>
            <ul>
              <a href = "#">Список городов</a>
              <a href = "#">Виды серфинга</a>
            </ul>
            </div>
            <div className="footer-section">
            <A_Textblock
              textStyle = 'text--gray'
              textSize = 'text--subbody'>
              {"Информация"}
            </A_Textblock>
            <ul>
              <a href = "#">О проекте</a>
              <a href = "#">Команда</a>
              <a href = "#">Авторам</a>
              <a href = "#">Сотрудничество</a>
              <a href = "#">Пользовательское соглашение</a>
            </ul>
            </div>
          </div>
          <div className="footer-section">
            <A_Textblock
              textStyle = 'text--gray'
              textSize = 'text--subbody'>
              {"Соц сети"}
            </A_Textblock>
            <ul>
              <a href = "#">Instagram</a>
              <a href = "#">Facebook</a>
              <a href = "#">Telegram</a>
              <a href = "#">Youtube</a>
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
