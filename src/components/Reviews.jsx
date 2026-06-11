import { reviews } from '../siteData.js'

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="rating-top">
          <div className="big">5.0</div>
          <div className="stars">★★★★★</div>
          <div className="src">Based on Facebook recommendations</div>
        </div>
        <div className="grid">
          {reviews.map((r) => (
            <div className="quote" key={r.author}>
              <div className="stars">★★★★★</div>
              <p>&ldquo;{r.text}&rdquo;</p>
              <div className="who">— {r.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
