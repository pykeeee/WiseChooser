import { defaults, champName, champPath, queueSetting } from '../misc/Static'
import { Link } from 'react-router-dom'
import styles from './BreadCrumbs.module.css'

const BreadCrumbs = ({nav}) => {
  const { cid,lane, defaultLane, vs, vsLane, defaultVsLane, mode, page, queue } = nav
  const settings = queueSetting(mode)
  const modeURL = !mode || mode === 'ranked' ? '' : nav.mode + '/'
  const modeName = mode ? settings.title + ' ' : ''
  if (!cid && !queue) return <></>
  let pageParams = []
  if (page === 'champion') {
    pageParams = mode==='ranked' ? [] : []
  } else if (page === 'vs') {
    if (lane !== defaultLane) pageParams.push('lane')
    if (vsLane !== defaultVsLane) pageParams.push('vsLane')
  } else if (page === 'counters') {
    pageParams = ['lane']
  } else if (page ==='leaderboard' && queue) {
    pageParams = ['queue']
  }
  let searchParams = []
  pageParams.forEach((p)=>{
    if (nav[p] !== defaults[p]) searchParams.push(p.toLowerCase()+'='+nav[p])
  })
  const validSearch = searchParams.length ? '?' + searchParams.join('&') : ''

  return (
    <ol className={styles.breadcrumb} vocab="https://schema.org/" typeof="BreadcrumbList">
      <li property="itemListElement" typeof="ListItem">
        <Link to = {{ pathname: `/lol/tierlist/${modeURL}` }} property="item" typeof="WebPage" >
        <span property="name">LoL {modeName}Tier List</span>
        </Link>
        <meta property="position" content="1"></meta>
      </li>
      { !queue && <li>
        <Link to = {{ pathname: `/lol/${champPath(cid)}/${modeURL}build/`, search: '' }} property="item" typeof="WebPage" >
          <span property="name">{ champName(cid) } {modeName}Build</span>
        </Link>
         <meta property="position" content="2"></meta>
      </li> }
      { nav.page ==='vs' && <li>
        <Link to = {{ pathname: `/lol/${champPath(cid)}/vs/${champPath(vs)}/build/`, search: validSearch }} property="item" typeof="WebPage" >
          <span property="name">{champName(cid)} vs {champName(vs)} Build</span>
        </Link>
         <meta property="position" content="3"></meta>
      </li> }
      { nav.page ==='runesvs' && <li>
        <Link to = {{ pathname: `/lol/${champPath(cid)}/vs/${champPath(vs)}/runes/`, search: validSearch }} property="item" typeof="WebPage" >
          <span property="name">{champName(cid)} vs {champName(vs)} Runes</span>
        </Link>
         <meta property="position" content="3"></meta>
      </li> }
      { nav.page ==='leaderboard' && cid>0 && <li>
        <Link to = {{ pathname: `/lol/${champPath(cid)}/leaderboard/`, search: '' }} property="item" typeof="WebPage" >
          <span property="name">{ champName(cid) } Leaderboard</span>
        </Link>
         <meta property="position" content="3"></meta>
      </li> }
      { nav.page ==='leaderboard' && queue && <li>
        <Link to = {{ pathname: `/lol/leaderboard/`, search: validSearch }} property="item" typeof="WebPage" >
          <span property="name">Challenger Leaderboard { queue.charAt(0).toUpperCase() + queue.slice(1) } Queue</span>
        </Link>
         <meta property="position" content="3"></meta>
      </li> }
      { nav.page ==='counters' && <li>
        <Link to = {{ pathname: `/lol/${champPath(cid)}/counters/`, search: validSearch }} property="item" typeof="WebPage" >
          <span property="name">{ champName(cid) } Counters</span>
        </Link>
         <meta property="position" content="3"></meta>
      </li> }
    </ol>
  )
}

export default BreadCrumbs
