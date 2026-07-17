import Icon from './Icon.jsx'
import { business } from '../siteData.js'

// Reusable Call/Text call-to-action. Use variant="light" on dark backgrounds.
export default function CallButton({ variant = 'primary', className = '' }) {
  const base = variant === 'light' ? 'btn btn-light' : 'btn btn-primary'
  return (
    <a href={business.phoneHref} className={`${base} ${className}`.trim()}>
      <Icon name="phone" size={17} />
      Call or Text {business.phoneDisplay}
    </a>
  )
}
