// import { Link } from 'react-router-dom'
import { defaults } from '../misc/Static'

const TierListLink = ({ view=false, mode=false, nav, children }) => {
  let search =[]
  if (view && view !== defaults.view) search.push('view='+view)
  if (nav.patch !== defaults.patch) search.push('patch='+nav.patch)
  if (nav.tier !== defaults.tier) search.push('tier='+nav.tier)
  if (nav.region !== defaults.region) search.push('region='+nav.region)
  if (!mode) mode=nav.mode
  let URL = '/lol/tierlist/'+(mode === 'ranked' ? '' : mode+'/')
  if (search.length) URL += '?'+search.join('&')

  return (
    <a href={URL} >
      {children}
    </a>
  )

  // return (
  //   <Link to={{pathname: URL , search: search.join('&') }} >
  //     {children}
  //   </Link>
  // )
}

export default TierListLink
