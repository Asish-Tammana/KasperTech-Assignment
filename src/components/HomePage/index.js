import {Component} from 'react'
import NavBar from '../NavBar'
import ExplorePage from '../ExplorePage'
import CompanyPage from '../CompanyPage'
import SupportPage from '../SupportPage'
import './index.css'

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ExplorePage />
        <CompanyPage />
        <SupportPage />
      </div>
    )
  }
}

export default HomePage
