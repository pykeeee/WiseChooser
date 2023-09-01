import { useRef, useState, useEffect } from 'react'
import CountersIcon from '../icons/CountersIcon'
import { defaults } from '../misc/Static'
import HomeIcon from '../icons/HomeIcon'
import LeaderboardIcon from '../icons/LeaderboardIcon'
import MenuRow from './MenuRow'
import MenuToggle from './MenuToggle'
import TierListIcon from '../icons/TierListIcon'
import useOnClickOutside from '../hooks/useOnClickOutside'
import useSearchParams from '../hooks/useSearchParams'
import styles from './Menu.module.css'

const Menu = ({menu}) => {
  const [active,setActive] = useState(false)
  const wrapper = useRef(false)
  const menuRef = useRef(false)
  const handleClick = () => setActive(!active)
  const handleClick2 = () => { if(menu === 'none' && active) setActive(false)} 

  useEffect(()=>{
    if (menu ==='none' && active && wrapper.current) wrapper.current.style.width = '180px'
    if (menu !=='none' && active && wrapper.current) {
      wrapper.current.style.width = ''
      setActive(false)
    }
  },[active,menu])

  useOnClickOutside(menuRef, () => { setActive(false) })

  let {mode,patch,tier} = useSearchParams()
  const view = ['grid','tier','list','delta'].indexOf(localStorage.getItem('tierList')) !== -1 ? localStorage.getItem('tierList') : false
  let search =[]
  if (view && view !== defaults.view) search.push('view='+view)
  if (patch && patch !== defaults.patch) search.push('patch='+patch)
  if (tier && tier !== defaults.tier) search.push('tier='+tier)
  const s = search.join('&')
  const modeLink = mode !=='ranked' ? mode +'/' : ''
  return (
    <>
    <div ref={menuRef}>
      { menu ==='none' && <MenuToggle active={active} handleClick={handleClick} /> }
      { (menu !=='none' || active) && <div ref={wrapper} className={styles.wrapper} onClick={handleClick2}>
          <MenuRow path={'/'+modeLink} search={s} icon={<HomeIcon />} trans="menu::main::home" description="Home"/>
          <MenuRow path={'/lol/tierlist/'+modeLink} search={s} icon={<TierListIcon />} trans="menu::main::tierlist" description="Tier List"/>
          <MenuRow path="/lol/leaderboard/" search="" icon={<LeaderboardIcon />} trans="menu::main::leaderboard" description="Leaderboard"/>
          <MenuRow path="/lol/aatrox/counters/" search={s} icon={<CountersIcon />} trans="menu::main::counters" description="Counters"/>
      </div> }
      </div>
    </>
  )
}
export default Menu
