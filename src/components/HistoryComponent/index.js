import './index.css'

const HistoryComponent = props => {
  const {eachHistoryItem, toDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryItem

  const onClickDelete = () => {
    console.log('delete triggered')
    toDeleteHistory(id)
  }
  return (
    <li className="list-el">
      <p> {timeAccessed} </p>
      <div className="history-item-container">
        <img src={logoUrl} className="logo-img" alt="domain logo" />
        <p className="title"> {title} </p>
        <p className="domain-url"> {domainUrl} </p>
      </div>
      <button
        type="button"
        data-testid="delete"
        className="button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="del-img"
        />
      </button>
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
