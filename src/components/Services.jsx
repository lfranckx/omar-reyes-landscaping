import Icon from './Icon.jsx'
import { services } from '../siteData.js'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">What We Do</span>
          <h2>Full-service outdoor care</h2>
          <p>
            From a quick mow to a full yard makeover, Omar and his crew handle
            it all — done right, done honest.
          </p>
        </div>
        <div className="grid">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <div className="ico">
                <Icon name={s.icon} size={26} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
