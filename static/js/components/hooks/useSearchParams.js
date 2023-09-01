import { defaults, queueSetting, champId } from '../misc/Static'
import { useLocation, useParams } from 'react-router-dom'
const useSearchParams = () => {
  let searchParams = {}
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  let { champion,mode, vschampion } = useParams()
  searchParams.url = location.pathname
  searchParams.mode = queueSetting(mode) ? mode : defaults.mode
  const settings = queueSetting(searchParams.mode)
  searchParams.cid = champId(champion)
  searchParams.vs = champId(vschampion)
  searchParams.region = params.get("region") && defaults.regions.indexOf(params.get("region")) !== -1 ? params.get("region") : defaults.region
  searchParams.view = params.get("view") ? params.get("view") : defaults.view
  searchParams.patch = params.get("patch") ? params.get("patch") : defaults.patch
  if (settings.patches && settings.patches.indexOf(searchParams.patch) === -1) searchParams.patch = settings.patches[0]
  searchParams.tier = params.get("tier") ? params.get("tier") : defaults.tier
  searchParams.lane = params.get("lane") ? params.get("lane") : defaults.lane
  searchParams.queue = params.get("queue") ? params.get("queue") : false
  if (!settings.laning) searchParams.lane = 'middle'
  searchParams.vsLane = params.get("vslane") ? params.get("vslane") : defaults.lane
  searchParams.mythic = params.get("mythic") && (params.get("mythic")===0 || params.get("mythic") > 0) ? params.get("mythic") : false
  searchParams.keystone = params.get("keystone") && (params.get("keystone")===0 || params.get("keystone") > 0) ? params.get("keystone") : false
  return searchParams
}

export default useSearchParams
