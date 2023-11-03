import {Component} from 'react'
import './index.css'

class ExplorePage extends Component {
  render() {
    return (
      <div id="exploreSection">
        <div className="explore-page">
          <div className="explore-page-top-section">
            <h1 className="caption">
              Learn from your favorite creators about{' '}
              <span className="fantasy-reports">fantasy reports</span>
            </h1>
            <img
              className="video-call"
              src="https://res.cloudinary.com/dyglzqdrl/image/upload/v1698945855/video_calls_ngsf9y.png"
              alt="video call"
            />
          </div>
          <div className="banner-section">
            <img
              className="banner"
              src="https://res.cloudinary.com/dyglzqdrl/image/upload/v1698945864/banner_ognpcj.png"
              alt="banner"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ExplorePage
