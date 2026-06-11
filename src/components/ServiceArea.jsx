import { serviceAreas } from '../siteData.js'

export default function ServiceArea() {
  return (
    <section className="area" id="area">
      <div className="wrap">
        <span className="eyebrow light">Where We Work</span>
        <h2>Proudly serving Northwest Arkansas</h2>
        <p>
          Based in Berryville and serving homeowners across Carroll County and
          the surrounding NWA communities — with occasional jobs across the line
          into Southwest Missouri.
        </p>
        <div className="pills">
          {serviceAreas.map((area) => (
            <span className="pill" key={area}>
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
