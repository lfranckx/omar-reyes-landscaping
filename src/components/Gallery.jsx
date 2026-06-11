import Icon from './Icon.jsx'
import { galleryTiles } from '../siteData.js'

export default function Gallery() {
  return (
    <section className="gallery" id="work">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Our Work</span>
          <h2>Recent projects</h2>
          <p>
            A look at the lawns, landscapes, and outdoor projects we've taken
            care of around Carroll County.
          </p>
        </div>
        <div className="grid">
          {galleryTiles.map((label) => (
            <div className="shot" key={label}>
              <div className="ph">
                <Icon name="image" size={30} />
                {label}
              </div>
            </div>
          ))}
        </div>
        <p className="note">
          Swap these in with before/after photos and reels from the Reyes's
          Landscaping Facebook page.
        </p>
      </div>
    </section>
  )
}
