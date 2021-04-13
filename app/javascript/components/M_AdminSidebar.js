import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_AdminSidebar.scss'
import A_Link from './A_Link.js'
import A_Icon from './A_Icon.js'
import Edit from 'images/edit.svg'
import Geopin from 'images/geopin.svg'
import People from 'images/people.svg'
import Comments from 'images/comments.svg'
import Cats from 'images/cats.svg'
import Hash from 'images/hash.svg'
import Stats from 'images/stats.svg'

class M_AdminSidebar extends React.Component {
  render () {
    return (
      <div className="admin-sidebar">
        <ul className="admin-links">
          <li className="admin-list-item">
            <A_Icon imageSrc= {Edit}/>
            <A_Link linkStyle = 'link--black' name="Публикации" address="/admin">
              {"Публикации"}
            </A_Link>
          </li>
          <li className="admin-list-item">
            <A_Icon imageSrc= {Geopin}/>
            <A_Link linkStyle = 'link--black' name="Школы" address="/schoolsMain">
              {"Школы"}
            </A_Link>
          </li>
          <li className="admin-list-item">
            <A_Icon imageSrc= {People}/>
            <A_Link linkStyle = 'link--black' name="Люди" address="/users">
              {"Люди"}
            </A_Link>
          </li>
          <li className="admin-list-item">
            <A_Icon imageSrc= {Comments}/>
            <A_Link linkStyle = 'link--black' name="Комментарии">
              {"Комментарии"}
            </A_Link>
          </li>
          <li className="admin-list-item">
            <A_Icon imageSrc= {Cats}/>
            <A_Link linkStyle = 'link--black' name="Категории" address="/categories">
              {"Категории"}
            </A_Link>
          </li>
          <li className="admin-list-item">
            <A_Icon imageSrc= {Hash}/>
            <A_Link linkStyle = 'link--black' name="Теги">
              {"Теги"}
            </A_Link>
          </li>
            <li className="admin-list-item">
              <A_Icon imageSrc= {Stats}/>
              <A_Link linkStyle = 'link--black' name="Статистика">
                {"Статистика"}
              </A_Link>
            </li>
        </ul>
      </div>
    );
  }
}

export default M_AdminSidebar
