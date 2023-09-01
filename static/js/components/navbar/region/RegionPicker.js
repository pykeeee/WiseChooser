import { Link} from 'react-router-dom'
import RegionButton from './RegionButton'
import styles from './RegionPicker.module.css'

const regionList = [
  'all',
  'br','euw','eune','jp','kr','lan','las','na',
  'ph','oce','sg','th','tr','tw','ru','vn']

const RegionPicker = ({nav}) => {
  return (
    <div className={styles.wrapper}>
      { regionList.map((r,i) =>
        <div key={i}><Link to={{ pathname: `${nav.baseURL}`, search: `?region=${r}${nav.queue ? '&queue='+nav.queue : ''}`}}>
          <RegionButton region={r} currentRegion = {nav.region} />
        </Link></div>
      )}
    </div>
  )
}

export default RegionPicker
