import Icon from './Icon.jsx'
import { business } from '../siteData.js'

export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <a href="#top" className="brand" aria-label="Reyes's Landscaping home">
          <Icon name="leaf" size={28} />
          {business.name}
        </a>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
          <a href="#reviews">Reviews</a>
          <a href="#area">Service Area</a>
        </nav>
        <a href={business.phoneHref} className="btn btn-primary">
          <Icon name="phone" size={16} />
          Call or Text
        </a>
      </div>
    </header>
  )
}
