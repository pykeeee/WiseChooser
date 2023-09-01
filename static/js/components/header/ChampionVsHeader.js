import BreadCrumbs from '../breadcrumbs/BreadCrumbs'
import ChampionVsStats from './ChampionVsStats'
import ChampionVsDescription from './ChampionVsDescription'
import ChampionVsLink from '../links/ChampionVsLink'
import CircleSmall from '../champion/CircleSmall'
import ExchangeIcon from '../icons/ExchangeIcon'
import NVP from '../ads/NVP'
import Rect from '../ads/Rect'
import styles from './ChampionVsHeader.module.css'

const ChampionVsHeader = ({nav,data,width,loading,adReady}) => {
  const { cid,lane,vs,vsLane } = nav ? nav : false
  if (!vs) return <></>
  return (
    <>
      <div className={styles.header}>
        <div className={styles.breadcrumbs}>
          <BreadCrumbs nav={nav} />
        </div>
        <div className={styles[width]}>
          { width !=='tiny' && <>
            <div>
              <div className={styles.vsicons}>
                <CircleSmall cid={cid} lane={lane} />
                <div className={styles.vs}>
                  vs<br />
                  <ChampionVsLink cid={vs} vs={cid} lane={vsLane} vsLane={lane} nav={nav}><ExchangeIcon /></ChampionVsLink>
                </div>
                <CircleSmall cid={vs} lane={vsLane} />
              </div>
              { !loading && <ChampionVsStats data={data} /> }
            </div>
            <div>
              <ChampionVsDescription data={data} nav={nav} />
            </div>
            <Rect width={width} loading={adReady} />
          </> }
          { width ==='tiny' && <>
            <div className={styles.vsicons}>
              <CircleSmall cid={cid} lane={lane} />
                <div className={styles.vs}>
                  vs<br />
                  <ChampionVsLink cid={vs} vs={cid} lane={vsLane} vsLane={lane} nav={nav}><ExchangeIcon /></ChampionVsLink>
                </div>
                <CircleSmall cid={vs} lane={vsLane} />
            </div>
            <ChampionVsDescription data={data} nav={nav} />
            { !loading && <ChampionVsStats data={data} /> }
          </> }
        </div>
      </div>
      { width !=='tiny' && width !=='xsmall' && width !=='small' &&<NVP width={width} loading={loading} /> }
    </>
  )
}

export default ChampionVsHeader
