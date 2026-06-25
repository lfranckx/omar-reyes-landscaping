import { business } from '../siteData.js'

// Pull every webp in the gallery folder through Vite's asset pipeline.
const images = import.meta.glob('../assets/webp/*.webp', {
  eager: true,
  import: 'default',
})

// Titles + descriptions derived from the filenames. Before/after pairs grouped.
const items = [
  { file: 'lawncare-rogers-1-before.webp', title: 'Lawn care · Rogers', badge: 'Before', alt: 'Overgrown front lawn in Rogers, Arkansas before mowing' },
  { file: 'lawncare-rogers-2-after.webp', title: 'Lawn care · Rogers', badge: 'After', alt: 'Freshly mowed and clean-edged lawn in Rogers, Arkansas' },
  { file: 'landscaping-holiday-island-1-before.webp', title: 'Landscaping · Holiday Island', badge: 'Before', alt: 'Yard in Holiday Island before landscaping work' },
  { file: 'landscaping-holiday-island-2-after.webp', title: 'Landscaping · Holiday Island', badge: 'After', alt: 'Refreshed, tidy landscaping in Holiday Island' },
  { file: 'landscaping-1-before.webp', title: 'Landscape makeover', badge: 'Before', alt: 'Overgrown property before a full landscape makeover' },
  { file: 'landscaping-2-before.webp', title: 'Landscape makeover', badge: 'Before', alt: 'Second view of the property before landscaping' },
  { file: 'landscaping-3-after.webp', title: 'Landscape makeover', badge: 'After', alt: 'Clean, finished landscaping after the makeover' },
  { file: 'fence-painting-1-before.webp', title: 'Fence painting', badge: 'Before', alt: 'Weathered wood fence before painting' },
  { file: 'fence-painting-2-after.webp', title: 'Fence painting', badge: 'After', alt: 'Freshly painted fence with a clean, even finish' },
  { file: 'huge-weed-cutting-before.webp', title: 'Heavy weed clearing', badge: 'Before', alt: 'Lot overgrown with tall weeds before clearing' },
  { file: 'huge-weed-cutting-after.webp', title: 'Heavy weed clearing', badge: 'After', alt: 'Cleared, mowed lot after heavy weed cutting' },
  { file: 'landscaping-county-road-332.webp', title: 'Landscaping · County Road 332', alt: 'Landscaping project along County Road 332' },
  { file: 'landscaping-historic-downtown-eureka.webp', title: 'Landscaping · downtown Eureka Springs', alt: 'Landscaping in historic downtown Eureka Springs' },
  { file: 'landscaping-holida-island-large-garden.webp', title: 'Large garden · Holiday Island', alt: 'A large, well-kept garden in Holiday Island' },
  { file: 'digging-eureka-springs.webp', title: 'Excavation · Eureka Springs', alt: 'Crew digging and grading a project in Eureka Springs' },
  { file: 'dirt-leveling.webp', title: 'Grading & dirt leveling', alt: 'Leveling and grading ground to prep a project' },
  { file: 'lawn-mowing-eureka-springs.webp', title: 'Lawn mowing · Eureka Springs', alt: 'Mowing a large lawn in Eureka Springs' },
  { file: 'lawn-mowing-vehicle-holiday-island.webp', title: 'Mowing job · Holiday Island', alt: 'Reyes mowing equipment on a job in Holiday Island' },
  { file: 'reyes-lawncare-huntsville.webp', title: 'Lawn care · Huntsville', alt: 'Lawn care job in Huntsville, Arkansas' },
  { file: 'weedcutter.webp', title: 'Brush & weed cutting', alt: 'Clearing thick brush and weeds with a trimmer' },
  { file: 'weedcutter-2.webp', title: 'Brush & weed cutting', alt: 'Knocking down heavy overgrowth with a weed cutter' },
  { file: 'yard-trimmings-truck.webp', title: 'Cleanup & haul-away', alt: 'Truck loaded with yard trimmings after a cleanup' },
  { file: 'omar-landscaping-1.webp', title: 'On the job', alt: 'Omar working on a landscaping project' },
  { file: 'omar-truck.webp', title: 'Ready to roll', alt: 'Omar with the Reyes Lawn & Powerwash truck' },
  { file: 'reyes-lawncare-dream-team.webp', title: 'The Reyes crew', alt: 'The Reyes Lawn & Powerwash team on site' },
  { file: 'reyes-lawncare-trucks.webp', title: 'The Reyes fleet', alt: 'Reyes Lawn & Powerwash trucks and equipment' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="work">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Our Work</span>
          <h2>Project gallery</h2>
          <p>
            Real lawn, landscaping, fencing, and cleanup jobs from around
            Carroll County and Northwest Arkansas — including a few
            before-and-afters.
          </p>
        </div>
        <div className="grid">
          {items.map((it, i) => {
            const src = images[`../assets/webp/${it.file}`]
            return (
              <figure className="shot" key={it.file + i}>
                <img src={src} alt={it.alt} loading="lazy" />
                {it.badge && (
                  <span className={`badge badge-${it.badge.toLowerCase()}`}>
                    {it.badge}
                  </span>
                )}
                <figcaption className="cap">{it.title}</figcaption>
              </figure>
            )
          })}
        </div>
        <p className="note">
          See more photos and reels on the{' '}
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reyes's Landscaping Facebook page
          </a>
          .
        </p>
      </div>
    </section>
  )
}
