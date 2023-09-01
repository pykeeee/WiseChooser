import { useRef, useState } from 'react'
import { queuesSettings } from '../../misc/Static'
import ModeButton from './ModeButton'
import NavLink from '../NavLink'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import styles from './ModeDropDown.module.css'

const ModeDropDown = ({nav}) => {
  const [dropdown,setDropDown] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setDropDown(false))
  const activeModes = Object.keys(queuesSettings).filter((mode)=>queuesSettings[mode].active)
  return (
    <div ref={ref}>
      <div className = {styles.selected}>
        <ModeButton type="mode" mode={nav.mode} clickHandler={()=>setDropDown(!dropdown)} name={queuesSettings[nav.mode].name} />
      </div>
      { (dropdown && nav.page !=='vs' && nav.page !=='runesvs') && <div className={styles.options}>
        { activeModes.map((m, i) =>
        <NavLink key={i} nav={nav} mode={m} baseURL={nav.baseURL} lane={(queuesSettings[m].laning && queuesSettings[nav.mode].laning) ? nav.lane : 'default'}  activeMode={nav.mode}>
          <ModeButton mode={m} clickHandler={()=>setDropDown(!dropdown)} name={queuesSettings[m].name} />
        </NavLink>
         )}
      </div>}
    </div>
  )
}

export default ModeDropDown
