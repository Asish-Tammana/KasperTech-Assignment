/* eslint-disable jsx-a11y/control-has-associated-label */
import {Component} from 'react'
import {BsChevronRight} from 'react-icons/bs'
import './index.css'

const teamMembers = [
  {
    sno: 1,
    name: 'rehn',
    imageUrl:
      'https://res.cloudinary.com/dyglzqdrl/image/upload/v1698945861/rehn_a4suds.png',
  },
  {
    sno: 2,
    name: 'xiufang',
    imageUrl:
      'https://res.cloudinary.com/dyglzqdrl/image/upload/v1698945859/fang_k3u5h4.png',
  },
  {
    sno: 3,
    name: 'julia',
    imageUrl:
      'https://res.cloudinary.com/dyglzqdrl/image/upload/v1698945866/julia_bk1mtg.png',
  },
]

const statisticsList = [
  {
    sno: 1,
    count: '300',
    category: 'creators',
  },
  {
    sno: 2,
    count: '14.4k',
    category: 'users',
  },
  {
    sno: 3,
    count: '9.11k',
    category: 'session',
  },
]

class CompanyPage extends Component {
  render() {
    return (
      <div className="company-section">
        <h2 className="company-section-caption">
          <span className="get-direct">Get direct</span> <br /> knowledge and
          insite.
        </h2>
        <div className="team-members-container">
          {teamMembers.map(each => (
            <img
              className="team-member-images"
              key={each.sno}
              src={each.imageUrl}
              alt={each.name}
            />
          ))}
        </div>
        <div className="statistics-section">
          <div className="statistics-detailed-section">
            {statisticsList.map(each => (
              <div key={each.sno}>
                <h2 className="statistics-count">{each.count}</h2>
                <p className="statistics-category">{each.category}</p>
              </div>
            ))}
          </div>
          <div className="explore-market-section-container">
            <p className="explore-link">Explore the marketplace</p>
            <button className="explore-button" type="button">
              <BsChevronRight />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default CompanyPage
