import Icon from './Icon.jsx'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap inner">
        <div className="about-photo">
          <div className="ph">
            <Icon name="image" size={40} />
            Add a photo of Omar &amp; the crew
          </div>
        </div>
        <div>
          <span className="eyebrow">Meet the team</span>
          <h2>Meet Omar Reyes &amp; Crew</h2>
          <p>
            Operating seven days a week, our mission is simple — keep our
            neighbors happy and their yards looking flawless. From seasonal
            cleanups and custom landscaping to power washing, concrete, and
            siding, we handle all your outdoor needs.
          </p>
          <p>
            We're a small, family-run crew that takes pride in honest,
            dependable work. When we say we'll show up, we show up.
          </p>
          <p className="signoff">Give us a call or shoot us a text today!</p>
          <div className="stats">
            <div>
              <div className="n">5+ yrs</div>
              <div className="l">Serving NWA</div>
            </div>
            <div>
              <div className="n">7 days</div>
              <div className="l">A week, always open</div>
            </div>
            <div>
              <div className="n">5.0 ★</div>
              <div className="l">Facebook rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
