import { Link} from 'react-router-dom'
import { champPath, defaults } from '../misc/Static'

const ChampionVsLink = ({ cid, vs, lane, vsLane, nav, children }) => {
  let search = []
  if (lane && lane!=='default') search.push('lane='+lane)
  if (vsLane && vsLane!=='default') search.push('vslane='+vsLane)
  if (nav.patch && nav.patch !== defaults.patch) search.push('patch='+nav.patch)
  if (nav.tier && nav.tier !== defaults.tier) search.push('tier='+nav.tier)
  
  return (
    <Link
      to={{ pathname: `/lol/${champPath(cid)}/vs/${champPath(vs)}/build/`, search: search.join('&') }} >
      {children}
    </Link>
  )
}

export default ChampionVsLink
