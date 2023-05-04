import './App.css'

import {Component} from 'react'

import HistoryComponent from './components/HistoryComponent'

// These are the list used in the application. You can move them to any component needed.

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
// const App = () => <div>Hello World</div>

class App extends Component {
  state = {
    count: initialHistoryList.length,
    searchInput: '',
    historyList: initialHistoryList,
  }

  onChangeInput = event => {
    console.log(event.target.value)

    const inputValue = event.target.value

    this.setState({searchInput: inputValue})
  }

  toDeleteHistory = id => {
    console.log(id)
    const {historyList} = this.state
    const deletedList = historyList.filter(eachItem => eachItem.id !== id)

    this.setState({historyList: deletedList})
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    let emptyHistoryEl
    const {count, searchInput, historyList} = this.state

    if (historyList.length === 0) {
      emptyHistoryEl = <p> There is no history to show </p>
    } else {
      emptyHistoryEl = null
    }

    console.log(searchInput)
    // console.log(historyList)

    const {id, timeAccessed, logo, title, domainUrl} = historyList[0]

    // this.setState({historyList: filteredList})
    const filteredList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    // console.log(filteredList)
    console.log(count)

    return (
      <div className="bg-container">
        <navbar className="top-sec">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="search-container">
            <div className="search-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search"
              />
            </div>
            <input
              className="input"
              type="search"
              onChange={this.onChangeInput}
              placeholder="Search History"
            />
          </div>
        </navbar>
        <div className="sec-2">
          <ul className="card">
            {filteredList.map(eachItem => (
              <HistoryComponent
                eachHistoryItem={eachItem}
                key={eachItem.id}
                toDeleteHistory={this.toDeleteHistory}
              />
            ))}
            {emptyHistoryEl}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
