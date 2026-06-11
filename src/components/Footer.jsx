import Icon from './Icon.jsx'
import { business } from '../siteData.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="wrap">
        <div className="brand">
          <Icon name="leaf" size={22} />
          {business.name}
        </div>
        © {year} {business.name} · Berryville, AR · {business.phoneDisplay}
      </div>
    </footer>
  )
}
