import { useRef, useState } from 'react'
import NavLink from '../NavLink'
import RegionButton from './RegionButton'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import styles from './RegionDropDown.module.css';

const regionList = [
  'all','br','eune','euw','jp','kr','lan','las','na',
  'oce','ph','sg','th','tr','tw','ru','vn' ]

const RegionDropDown = ({nav}) => {
  const [dropdown,setDropDown] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setDropDown(false))
  return (
    <div ref={ref}>
      <div className = {styles.selected}>
        <RegionButton region={nav.region} clickHandler={() => setDropDown(!dropdown)} />
      </div>
      { dropdown && <div className={styles.options}>
        { regionList.map((r, i) =>
          <NavLink key={i} type="regionicon" nav={nav} region={r} baseURL={nav.baseURL} activeRegion={nav.region}>
            <RegionButton region={r} clickHandler={() => setDropDown(!dropdown)} />
          </NavLink>
        )}
      </div> }
    </div>
  )
}

export default RegionDropDown
