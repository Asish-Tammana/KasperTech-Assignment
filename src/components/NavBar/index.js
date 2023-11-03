import {Component} from 'react'
import {PiDotsNineBold} from 'react-icons/pi'
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="left-menu menu-section">
          <img
            className="navbar-logo"
            src="https://res.cloudinary.com/dyglzqdrl/image/upload/v1698945855/yodora_htyok2.png"
            alt="logo"
          />
          <div className="nav-links-container">
            <p className="nav-links">Explore</p>
            <p className="nav-links">Company</p>
            <p className="nav-links">Support</p>
          </div>
        </div>
        <div className="right-menu menu-section">
          <p className="nav-links">Become a member</p>
          <button className="sign-in-button" type="button">
            Sign in
          </button>
        </div>
        <div className="right-mobile-menu">
          <PiDotsNineBold />
        </div>
      </div>
    )
  }
}

export default NavBar
