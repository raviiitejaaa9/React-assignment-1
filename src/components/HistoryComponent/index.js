import './index.css'

const HistoryComponent = props => {
  const {eachHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl} = eachHistoryItem
  return (
    <li className="list-el">
      <p> {timeAccessed} </p>
      <div className="history-item-container">
        <img src={logoUrl} className="logo-img" alt="app logo" />
        <p className="title"> {title} </p>
        <p className="domain-url"> {domainUrl} </p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        className="del-img"
      />
    </li>
  )
}

HistoryComponent.defaultProps = {
  id: 0,
  timeAccessed: '07:45 PM',
  logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
  title: 'Instagram',
  domainUrl: 'instagram.com',
}

export default HistoryComponent
