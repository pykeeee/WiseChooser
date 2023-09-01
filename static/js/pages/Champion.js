import { useEffect } from 'react'
import { defaults, champPath,queueSetting } from '../components/misc/Static'
import AdsGutter from '../components/ads/AdsGutter'
import Anchor from '../components/ads/Anchor'
import Billboard from '../components/ads/Billboard'
import Background from '../components/misc/Background'
import ChampionHeader from '../components/header/ChampionHeader'
import ChampMap from '../components/misc/ChampMap'
import ChampionSideBar from '../components/champion/ChampionSideBar'
import ChampionVsHeader from '../components/header/ChampionVsHeader'
import Counters from '../components/counters/Counters'
import Error from '../components/error/Error'
import Graphs from '../components/champion/Graphs'
import HLeaderboard from '../components/ads/HLeaderboard'
import ItemSets from '../components/champion/ItemSets'
import LargeRunePanel from '../components/runes/LargeRunePanel'
import Loading from '../components/misc/Loading'
import NavBar from '../components/navbar/NavBar'
import { Navigate } from 'react-router-dom'
import PanelLazy from '../components/champion/PanelLazy'
import SetSingle from '../components/champion/SetSingle'
import SetSingleSave from '../components/champion/SetSingleSave'
import Skills from '../components/skills/Skills'
import Summary from '../components/summary/Summary'
import TabButtons from '../components/misc/TabButtons'
import Trans from '../components/misc/Trans'
import useFetchPreCache from '../components/hooks/useFetchPreCache'
import useRedirect from '../components/hooks/useRedirect'
import useSearchParams from '../components/hooks/useSearchParams'
import useWidth from '../components/hooks/useWidth'
import Wrapper from '../components/misc/Wrapper'
import styles from './Champion.module.css'
// import { objectSize } from '../components/debug/ObjectSize'
const lanes = ['top','jungle','middle','bottom','support']

const Champion = () => {
  let {url,cid,vs,mode,region,patch,tier,lane,vsLane,view,mythic,keystone} = useSearchParams()
  const settings = queueSetting(mode)
  const w = useWidth()
  const width = w.size
  let key = false
  if (cid>0) {
    key=mode+'_'+tier+'_'+patch+'_'+cid+'_'+lane+'_'+mythic+'_'+keystone
    if (vs<1) key += '_'+region
    if (vs>0) key += '_'+vs+'_'+vsLane
  }

  let nav = {page:(vs>0 ? 'vs' : 'champion'),baseURL:url,cid:cid,lane:lane,vs:vs,vsLane:vsLane,mode:mode,patch:patch,tier:tier,region:region,view:view,mythic:mythic, keystone:keystone }
  let URL = false
  if (nav.vs > 0 ) URL = `https://${defaults.api}/mega/?ep=champion&p=d&v=1&patch=${nav.patch}&cid=${nav.cid}&lane=${nav.lane}&tier=${nav.tier}&queue=${settings.queue}&vs=${nav.vs}&vslane=${nav.vsLane}`
  else if (cid >0) URL = `https://${defaults.api}/mega/?ep=champion&p=d&v=1&patch=${nav.patch}&cid=${nav.cid}&lane=${nav.lane}&tier=${nav.tier}&queue=${settings.queue}&region=${nav.region}`
  if (nav.mythic > 0) URL += `&mythic=${nav.mythic}`
  if (nav.keystone > 0) URL += `&keystone=${nav.keystone}`
  const data = useFetchPreCache(URL,key)
  let URL2 = false
  if (typeof data !== 'undefined') {
    if (nav.vs > 0 ) URL2 = `https://${defaults.api}/mega/?ep=champion2&p=d&v=1&patch=${nav.patch}&cid=${nav.cid}&lane=${nav.lane}&tier=${nav.tier}&queue=${settings.queue}&vs=${nav.vs}&vslane=${nav.vsLane}`
    else if (cid >0) URL2 = `https://${defaults.api}/mega/?ep=champion2&p=d&v=1&patch=${nav.patch}&cid=${nav.cid}&lane=${nav.lane}&tier=${nav.tier}&queue=${settings.queue}&region=${nav.region}`
  }
  if (nav.mythic > 0) URL2 += `&mythic=${nav.mythic}`
  if (nav.keystone > 0) URL2 += `&keystone=${nav.keystone}`
  const data2 = useFetchPreCache(URL2,key)
  let earlyItemURL = false
  if (nav.vs > 0 ) earlyItemURL = `https://${defaults.api}/mega/?ep=earlyitem&p=d&v=1&patch=${nav.patch}&cid=${nav.cid}&lane=${nav.lane}&tier=${nav.tier}&queue=${settings.queue}&vs=${nav.vs}&vslane=${nav.vsLane}`
  else if (cid >0) earlyItemURL = `https://${defaults.api}/mega/?ep=earlyitem&p=d&v=1&patch=${nav.patch}&cid=${nav.cid}&lane=${nav.lane}&tier=${nav.tier}&queue=${settings.queue}&region=${nav.region}`  
  if (nav.mythic > 0) earlyItemURL += `&mythic=${nav.mythic}`
  if (nav.keystone > 0) earlyItemURL += `&keystone=${nav.keystone}`

  if (data && data.header) {
    lane = nav.lane = data.header.lane
    nav.defaultLane = data.header.defaultLane
    if (data.header.vslane) {
      vsLane = nav.vsLane = data.header.vslane
      nav.defaultVsLane = data.header.defaultVsLane
    }
  }

  useEffect(() => {
    if (data) {
      window.gtag('config', 'G-0NSEBC8PLE', { 'page_path': window.location.pathname })  
    }
  },[data])
  const redirect = useRedirect(nav)

  if (data && data.header && data.header.n===0) return <Error type="nodata" nav={nav} width={width} />
  if (cid === 0) return <Error type="nochamp" width={width} />

  const isLoading = !data || redirect.redirect
  const adReady = !(data && data2 )
  let analysed = 0
  let averageWR = 0
  let lanePercent = false
  let wr = 0
  let pick = 0
  let header = []
  if (!isLoading) {
    analysed = data.analysed.toLocaleString()
    averageWR = data.avgWinRate.toFixed(2)
    lanePercent = lanes.map((l) => data.nav.lanes[l])
    wr = data.header.wr
    pick = data.header.n
    header = data.header
  }

  const path = champPath(cid)
  return (
    <>
      {/* <CheckRedirect nav={nav} /> */}
      { redirect.redirect && <Navigate to={{ pathname: redirect.pathname, search: redirect.search }} /> }
      <NavBar nav={nav} analysed={analysed} averageWR={averageWR} lanePercent={lanePercent} width={width} />
      <Background cid={cid} width={width}/>
      <AdsGutter width={w.ads} loading={adReady} />
      <Wrapper width={width}>
        <ChampionHeader nav={nav} data={header} path={path} width={width} loading={isLoading} adReady={adReady} />
        <ChampionVsHeader nav={nav} data={header} path={path} width={width} loading={isLoading} adReady={adReady}  />
        { (width==='tiny' || width==='xsmall' || width==='small') && <Anchor width={width} loading={isLoading} /> }
        {/* {width} {w.width} */}
        { isLoading && <Loading />}
        { isLoading && <div className={styles.placeholder}></div>}
        { !isLoading && <>
          <TabButtons width={width} nav={nav} tab={0} cid={cid} lane={lane} /> 
          { w.ads ==='none' &&  <HLeaderboard width={width} /> }
          { data.summary && <Summary cid={cid} data={data.summary} width={width} /> }
          { w.ads ==='none' && <Billboard width={width} /> }
          { w.ads !=='none' && <HLeaderboard width={width} /> }
          { vs < 1 && data && data.graph && <Graphs data={data.graph} lane={lane} bans={settings.bans} mode={mode} cid={cid} region={region} width={width}/> }
        </> }
        { !isLoading && <div className = {styles[width]}>
          { !mythic && <div className={styles.mythic}><div>NEW</div>Click Mythic Items Below to Filter Builds</div>}
          { !mythic && <PanelLazy width={width} height={129} nav={nav} data = {data.mythicItem} type="mythic" title={<Trans trans="item::mythic" english="Mythic" maxChars={16} />} title2={<Trans trans="item::items" english="Items" maxChars={16} />}/> }
          { settings.counters && vs < 1 && <Counters 
            enemy={[data['enemy_top'],data['enemy_jungle'],data['enemy_middle'],data['enemy_bottom'],data['enemy_support']]}
            team={data2 ? [data2['team_top'],data2['team_jungle'],data2['team_middle'],data2['team_bottom'],data2['team_support']] : []}
            width={width} winRate={wr} pick={pick} nav={nav} averageWR={data.avgWinRate} 
            /> }
          { data && <SetSingle width={width} height={165} set={data.spells} one={data.spell} setType="spells" oneType="spell" title={<Trans trans="general::summonerspells" english="Summoner Spells" maxChars={16} />} />}
          { data && <SetSingle width={width} height={165} set={data.startSet} one={data.startItem} filter={true} setType="itemset" oneType="item2" title="Starting Items" />}
          { data.earlyItem && <SetSingleSave height={113} width={width} set={data2 ? data2.earlySet : []} url={earlyItemURL} saveKey={key} one={data.earlyItem} defaultSingle={true} filter={true} setType="itemset" oneType="item2" title={<Trans trans="general::earlyitems" english={"Early Items (10min)"} maxChars={20} />} />}
          { vs < 1 && <ItemSets width={width} itemSets={data2 ? data2.itemSets : data.itemSets} pick={data.n} filterData={data.popularItem} /> }
          <PanelLazy width={width} height={129} data={data.item1} type="item" title={<Trans trans="item::item" english="Item" maxChars={10} />} title2="1"/>
          { nav.cid !==69 && <PanelLazy width={width} height={129} nav={nav} data={data.boots} type="item3" title={<Trans trans="item::boots" english="Boots" maxChars={10} />} /> }
          <PanelLazy width={width} height={129} data={data.item2} type="item" title={<Trans trans="item::item" english="Item" maxChars={10} />} title2="2" />
          <PanelLazy width={width} height={129} data={data.item3} type="item" title={<Trans trans="item::item" english="Item" maxChars={10} />} title2="3" />
          <PanelLazy width={width} height={129} data={data.item4} type="item" title={<Trans trans="item::item" english="Item" maxChars={10} />} title2="4" />
          <PanelLazy width={width} height={129} data={data.item5} type="item" title={<Trans trans="item::item" english="Item" maxChars={10} />} title2="5" />
          <PanelLazy width={width} height={129} data={data.popularItem} type="item3" title={<Trans trans="item::popularitems" english="Popular Items" maxChars={16} />} />
          <PanelLazy width={width} height={129} data={data.winningItem} type="item3" title={<Trans trans="item::winningitems" english="Winning Items" maxChars={16} />} />
          <PanelLazy width={width} height={129} data = {data.item} type="item3" title={<Trans trans="item::all" english="All" maxChars={16} />} title2={<Trans trans="item::items" english="Items" maxChars={16} />} />
          <Skills cid={cid} data={data2 ? data2.skills : data.skills} width={width}/>
          <div className={styles.mythic}><div>NEW</div>Click Keystones Below to Filter Builds</div>
          <LargeRunePanel data={data.runes} summary={data.summary && data.summary.runes} nav={nav}/> 
        </div> } 
        { !isLoading && <ChampionSideBar width={width} nav={nav} cid={cid} path={path}
          data={{
            objective:data.objective,
            depth:data.depth,
            time:data.time,
            timeWin:data.timeWin,
            topStats:data.topStats,
            top:data.top,
            stats:data.stats,
            statsCount:data.statsCount
          }} /> }
      </Wrapper>
      { width==='tiny' && <Wrapper width={width}>
        <ChampMap mode={mode} cid={cid} />
      </Wrapper> }

    </>
  )
}

export default Champion
