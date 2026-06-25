import Icon from './Icon.jsx'
import { business } from '../siteData.js'
import logo from '../assets/reyes-logo.png'

export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <a href="#top" className="brand" aria-label="Reyes Lawn & Powerwash Services home">
          <img src={logo} className="logo-mark" alt="Reyes Lawn & Powerwash Services" />
          {business.name}
        </a>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
          <a href="#reviews">Reviews</a>
          <a href="#area">Service Area</a>
        </nav>
        <div className="nav-actions">
          <a
            href={business.facebook}
            className="nav-social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reyes Lawn & Powerwash on Facebook"
          >
            <Icon name="facebook" size={20} />
          </a>
          <a href={business.phoneHref} className="btn btn-primary call-btn">
            <Icon name="phone" size={16} />
            <span className="btn-label">Call or Text</span>
          </a>
        </div>
      </div>
    </header>
  )
}
