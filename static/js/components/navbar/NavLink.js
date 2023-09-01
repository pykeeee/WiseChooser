import { champPath, defaults } from '../misc/Static'
import { Link } from 'react-router-dom'

const NavLink = ({nav, extras=true, patch, tier, mode, view, region, lane, vsLane=false, activeMode, baseURL, children }) => {
  let queries = []
  if ((lane ? lane:nav.lane) !==defaults.lane) queries.push('lane='+(lane ? lane:nav.lane))
  if ((tier ? tier:nav.tier) !==defaults.tier) queries.push('tier='+(tier ? tier:nav.tier))
  if (activeMode) {
    if (nav.page ==='champion' || nav.page ==='build' || nav.page==='runes') baseURL = '/lol/'+champPath(nav.cid)+'/'
    if (nav.page ==='tierlist') baseURL = '/lol/tierlist/'
    if (nav.page ==='front') baseURL = '/'
    if (nav.page ==='patchnotes') baseURL = '/lol/patchnotes/'
    if (mode !=='ranked') baseURL += mode + '/'
    if (nav.page ==='champion' || nav.page ==='build') baseURL += 'build/'
    if (nav.page ==='runes') baseURL += nav.page+'/'
  }
  if ((region ? region:nav.region) !==defaults.region) queries.push('region='+(region ? region:nav.region))
  if ((patch ? patch:nav.patch) !==defaults.patch) queries.push('patch='+(patch ? patch:nav.patch))
  if (nav.page==='tierlist' && extras) {
    if ((view ? view:nav.view) !==defaults.view) queries.push('view='+(view ? view:nav.view))
  }
  if (nav.vs>0 || nav.page ==='counters') {
    if (vsLane) queries.push('vslane='+vsLane)
    else queries.push('vslane='+nav.vsLane)
  }
  return (
    <Link to={{pathname: `${baseURL}`, search: `?${queries.join('&')}`}} >
      {children}
    </Link>
  )
}

export default NavLink
