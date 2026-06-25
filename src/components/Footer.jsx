import { business } from '../siteData.js'
import logo from '../assets/reyes-logo.png'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="wrap">
        <div className="brand">
          <img src={logo} className="logo-mark" alt="" />
          {business.name}
        </div>
        © {year} {business.name} · Berryville, AR · {business.phoneDisplay}
      </div>
    </footer>
  )
}
