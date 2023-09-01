import { useRef, useState } from 'react'
import NavLink from '../NavLink'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import ViewButton from './ViewButton'
import styles from './ViewDropDown.module.css'

const views = ['list','grid','tier','delta']

const ViewDropDown = ({nav}) => {
  const [dropdown,setDropDown] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setDropDown(false))
  return (
    <div ref={ref}>
      <div className = {styles.selected}>
        <ViewButton view={nav.view} clickHandler={() => setDropDown(!dropdown)} />
      </div>
      { dropdown && <div className={styles.options}>
        { views.map((v, i) =>
          <NavLink key={i} type="button" nav={nav} view={v} baseURL={nav.baseURL} activeView={nav.view}>
            <ViewButton view={v} clickHandler={()=>setDropDown(!dropdown)} />
          </NavLink>
         )}
      </div> }
    </div>
  )
}

export default ViewDropDown
