import { bees } from '../data.js'

export default function Bee({ size = 48, index = 0, fit = 0.88, className = '' }) {
  return (
    <div
      className={`bee ${className}`}
      style={{ '--bee-size': `${size}px`, '--bee-fit': fit }}
      aria-hidden="true"
    >
      <img src={bees[index % bees.length]} alt="" />
    </div>
  )
}
