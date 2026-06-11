import Icon from './Icon.jsx'
import { business } from '../siteData.js'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <span className="eyebrow light">Get In Touch</span>
        <h2>Get a Free Quote</h2>
        <p className="lead">
          Ready to get your yard looking its best? Give Omar a call or text —
          we're happy to come take a look.
        </p>
        <a href={business.phoneHref} className="phone">
          <Icon name="phone" size={30} />
          {business.phoneDisplay}
        </a>
        <div className="meta">
          <span className="meta-item">
            <Icon name="pin" size={16} />
            {business.location}
          </span>
          <span>·</span>
          <span className="meta-item">
            Find us on{' '}
            <a href={business.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}
