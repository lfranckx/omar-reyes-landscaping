import Icon from './Icon.jsx'
import { business } from '../siteData.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <span className="badge">★ 5.0 on Facebook · Family-run since 2016</span>
        <h1>{business.name}</h1>
        <p>
          Honest, hardworking lawn care &amp; full-service outdoor work in
          Berryville, Carroll County, &amp; across Northwest Arkansas.
        </p>
        <div className="cta-row">
          <a href={business.phoneHref} className="btn btn-primary">
            <Icon name="phone" size={17} />
            Call or Text {business.phoneDisplay}
          </a>
          {/* <a href="#services" className="btn btn-ghost">
            See Our Services
          </a> */}
        </div>
        <div className="sub">
          Family-run<span>•</span>Serving Carroll County &amp; NWA<span>•</span>
          Open 7 days a week
        </div>
      </div>
    </section>
  )
}
