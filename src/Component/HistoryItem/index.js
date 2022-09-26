import {Component} from 'react'

import './index.css'

class HistoryItem extends Component {
  render() {
    const {eachHistoryList, onDeleteItem} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryList

    const deleteBtnClicked = () => {
      onDeleteItem(id)
    }
    return (
      <li className="history-item">
        <p className="access-time">{timeAccessed}</p>
        <div className="history-item-container">
          <div className="historyList-text-container">
            <img src={logoUrl} className="history-img" alt="domain logo" />
            <div className="historyList-title-url-container">
              <p className="history-title">{title}</p>
              <p className="history-domain-url">{domainUrl}</p>
            </div>
          </div>
          <button
            type="button"
            testid="delete"
            className="button-btn"
            onClick={deleteBtnClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
      </li>
    )
  }
}
export default HistoryItem
