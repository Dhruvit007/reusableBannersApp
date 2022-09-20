import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  return (
    <li className={`banner-container ${bannerCard.className}`}>
      <div className="contain-container">
        <h1 className="heading">{bannerCard.headerText}</h1>
        <p className="paragraph">{bannerCard.description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
