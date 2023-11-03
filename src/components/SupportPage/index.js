import {Component} from 'react'
import {BsInstagram} from 'react-icons/bs'
import {RxTwitterLogo} from 'react-icons/rx'
import {AiOutlineFacebook} from 'react-icons/ai'
import './index.css'

const featuresList = [
  {
    sno: 1,
    name: 'Engagement',
    description: 'Full autonomy on when and how you talk',
    imageUrl:
      'https://res.cloudinary.com/dyglzqdrl/image/upload/v1698945854/engagement_smeds3.png',
    altText: 'engagement',
  },
  {
    sno: 2,
    name: 'Autonomy',
    description: 'Engage on a deeper level with the fans that most matter',
    imageUrl:
      'https://res.cloudinary.com/dyglzqdrl/image/upload/v1698945854/autonomy_gmuyjd.png',
    altText: 'autonomy',
  },
  {
    sno: 3,
    name: 'Free',
    description: 'No monthly fee or sign-up fee',
    imageUrl:
      'https://res.cloudinary.com/dyglzqdrl/image/upload/v1698945854/free_dcyvnm.png',
    altText: 'free',
  },
  {
    sno: 4,
    name: 'Earn',
    description: 'Add a new source of income that you can control',
    imageUrl:
      'https://res.cloudinary.com/dyglzqdrl/image/upload/v1698945854/earn_sdodtf.png',
    altText: 'earn',
  },
]

class SupportPage extends Component {
  render() {
    return (
      <div className="support-section">
        <div className="support-first-section">
          <div className="question-section">
            <h1 className="support-question">Why become a creator?</h1>
            <p className="support-description">
              Engage with your supporter and subscriber to sell your skills,
              knowledge and passion
            </p>
            <button className="button-style creator-button" type="button">
              Become a creator
            </button>
          </div>
          <div className="features-section">
            <div className="features-row">
              {featuresList.map(each => (
                <div className="feature-item" key={each.sno}>
                  <img
                    className="feature-image"
                    src={each.imageUrl}
                    alt={each.altText}
                  />
                  <h3>{each.name}</h3>
                  <p>{each.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="support-second-section">
          <h1>Engage without limits</h1>
          <p>
            Join a growing community and talk directly with your favorite
            creators
          </p>
          <button className="button-style start-button" type="button">
            Get Started
          </button>
        </div>
        <div className="support-third-section">
          <div className="handles-container">
            <img
              className="support-logo"
              src="https://res.cloudinary.com/dyglzqdrl/image/upload/v1698945855/yodora_htyok2.png"
              alt="logo"
            />
            <div className="social-media-container">
              <AiOutlineFacebook />
              <RxTwitterLogo />
              <BsInstagram />
            </div>
          </div>
          <div>
            <h3 className="support-title">About</h3>
            <p className="support-name">How it works company</p>
            <p className="support-name">Company</p>
            <p className="support-name">Help & support</p>
          </div>
          <div>
            <h3 className="support-title">For Creators</h3>
            <p className="support-name">How can I get paid</p>
            <p className="support-name">Become a creator</p>
          </div>
          <div>
            <h3 className="support-title">Learn</h3>
            <p className="support-name">Blog</p>
            <p className="support-name">Cookies policy</p>
            <p className="support-name">Privacy policy</p>
          </div>
          <div>
            <h3 className="support-title">Support</h3>
            <p className="support-name">Service status</p>
            <p className="support-name">Report abuse</p>
            <p className="support-name">Dispute a payment</p>
          </div>
          <div className="mobile-handles-container">
            <img
              className="mobile-support-logo"
              src="https://res.cloudinary.com/dyglzqdrl/image/upload/v1698945855/yodora_htyok2.png"
              alt="logo"
            />
            <div className="mobile-social-media-container">
              <AiOutlineFacebook />
              <RxTwitterLogo />
              <BsInstagram />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SupportPage
