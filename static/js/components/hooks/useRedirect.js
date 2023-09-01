import { champPath, defaults } from '../misc/Static'

const useRedirect = (nav) => {
  const {cid, lane, defaultLane, vs, vsLane, defaultVsLane, page, mode,  mythic, keystone } = nav
  let pagePath, pageParams = []
  const modeURL = mode === 'ranked' ? '' : nav.mode + '/'
  if (page === 'tierlist') {
    pagePath = '/lol/tierlist/' + modeURL
    pageParams = mode==='ranked' ? ['lane','tier','region','patch','view'] : ['tier','region','patch','view']
  } else if (page === 'front') {
    pagePath = '/'+modeURL
    pageParams = ['tier','patch']
  } else if (page === 'champion') {
    pagePath = '/lol/' + champPath(cid) + '/' + modeURL + 'build/'
    pageParams = mode==='ranked' && lane !==defaultLane ? ['lane','tier','region','patch'] : ['tier','region','patch']
  } else if (page === 'vs') {
    pagePath = '/lol/' + champPath(cid) + '/vs/' + champPath(vs) + '/build/'
    if (lane !== defaultLane) pageParams.push('lane')
    if (vsLane !== defaultVsLane) pageParams.push('vsLane')
    pageParams.push ('tier','patch')
  } else if (page ==='leaderboard') {
    pagePath = cid ? '/lol/' + champPath(cid) + '/leaderboard/' : '/lol/leaderboard/'
    pageParams = cid ? ['region'] : ['region','queue']
  } else if (page === 'counters') {
    pagePath = '/lol/' + champPath(cid) + '/counters/'
    if (lane !== defaultLane) pageParams.push('lane')
    if (vsLane !== defaultLane) pageParams.push('vsLane')
    pageParams.push ('tier','patch')
  }
  let searchParams = []
  if (pageParams) pageParams.forEach((p)=>{
    if (nav[p] !== defaults[p]) searchParams.push(p.toLowerCase()+'='+nav[p])
  })
  if (page === 'champion' && (mythic === 0 || mythic > 0)) searchParams.push('mythic='+mythic)
  if (page === 'champion' && (keystone === 0 || keystone > 0)) searchParams.push('keystone='+keystone)
  const validSearch = searchParams.length ? '?' + searchParams.join('&') : ''
  let redirect = {redirect:false}
  if (window.location.pathname !== pagePath) redirect = {redirect:true,pathname:pagePath, search:validSearch}
  if (window.location.search !== validSearch) redirect = {redirect:true,pathname:nav.baseURL, search:validSearch}
  return redirect
}

export default useRedirect
