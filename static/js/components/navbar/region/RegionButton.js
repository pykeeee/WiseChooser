import RegionIcon from '../../misc/RegionIcon'
import styles from './RegionButton.module.css'

const RegionButton = ({region,currentRegion,clickHandler=false}) => {
  if (!region) return ''
  if(!clickHandler) return (
    <div className={region===currentRegion ? styles['active'] : styles['inactive']}>
      <RegionIcon region={region} />
    { region==='all' ? 'GLOBAL' : region.toUpperCase()}
  </div>
  )
  return (
    <div className={region===currentRegion ? styles['active'] : styles['inactive']} onClick={clickHandler && (e => clickHandler())} >
      <RegionIcon region={region} />
      { region==='all' ? 'GLOBAL' : region.toUpperCase()}
    </div>
  )
}

export default RegionButton
