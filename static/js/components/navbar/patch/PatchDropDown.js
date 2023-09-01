import React, { useRef, useState } from 'react'
import { defaults } from '../../misc/Static'
import NavLink from '../NavLink'
import PatchButton from './PatchButton'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import styles from './PatchDropDown.module.css'

const PatchDropDown = ({nav}) => {
  const [dropdown,setDropDown] = useState(false)
  const ref = useRef(null)
  const patchList = ['7','14','30'].concat(defaults.patches)
  useOnClickOutside(ref, () => setDropDown(false))
  return (
    <div ref={ref}>
      <div className = {styles.selected}>
        <PatchButton patch={nav.patch} clickHandler={()=>setDropDown(!dropdown)} />
      </div>
      { dropdown && <div className={styles.options}>
        { patchList.map((p, i) =>
          <NavLink key={i} type="button" nav={nav} patch={p} baseURL={nav.baseURL}  >
            <PatchButton patch={p} clickHandler={()=>setDropDown(!dropdown)} />
          </NavLink>
        )}
      </div> }
    </div>
  )
}

export default PatchDropDown
