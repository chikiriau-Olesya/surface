import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_SmallList.scss'



class A_SmallList extends React.Component {
      render() {
        return (
            <div className="admin-actions">
              <a href={address} className="action-edit">Редактировать</a>
              <a href = {action} className="action-delete">Удалить</a>
            </div>
        )
    }
}

export default A_SmallList
