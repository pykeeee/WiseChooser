import ChampionLink from '../../links/ChampionLink'
import { defaults } from '../../misc/Static'
import styles from './Clear.module.css'

const Clear = ({nav}) => {
  const params = new URLSearchParams(window.location.search)
  const lane = params.get("lane") ? params.get("lane") : defaults.lane
  let enabled = false, newNav = {}
  let page = nav.page
  if (nav.page ==='champion') {
    enabled = nav.tier!==defaults.tier || nav.region !== defaults.region || lane !== defaults.lane || nav.patch !== defaults.patch || nav.mode !== defaults.mode ? true : false
    newNav = {tier:defaults.tier,region:defaults.region,patch:defaults.patch,mode:defaults.mode}
    page = 'build'
  } else if (nav.page==='counters') {
    const vsLane = params.get("vslane") ? params.get("vslane") : defaults.lane
    enabled = nav.tier!==defaults.tier || nav.region !== defaults.region || lane !== defaults.lane || vsLane !== defaults.lane || nav.patch !== defaults.patch || nav.mode !== defaults.mode ? true : false
    newNav = {tier:defaults.tier,region:defaults.region,patch:defaults.patch,mode:defaults.mode}
  } else if (nav.page ==='vs') {
    enabled = true
    newNav = nav
    page = 'build'
  }
  if (!enabled) return ''
  return (
    <div className={styles.clear}><ChampionLink cid={nav.cid} page={page} nav={newNav}>X</ChampionLink></div>
  )
}

export default Clear
