// Write your code here.
import './index.css'

const BannerDetails = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className="user-card-container">
      <div className={className}>
        <div className="text-container">
          <h1 className="user-name">{headerText}</h1>
          <p className="user-designation">{description}</p>
          <button className="user-button">Show More</button>
        </div>
      </div>
    </li>
  )
}

export default BannerDetails
