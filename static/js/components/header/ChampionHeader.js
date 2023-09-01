import BreadCrumbs from '../breadcrumbs/BreadCrumbs'
import ChampionDescription from './ChampionDescription'
import ChampionStats from './ChampionStats'
import DamageCircle from './DamageCircle'
import CircleBig from '../champion/CircleBig'
import Keystone from '../navbar/keystone/Keystone'
import Mythic from '../navbar/mythic/Mythic'
import NVP from '../ads/NVP'
import Rect from '../ads/Rect'
import SkillList from '../skills/SkillList'
import styles from './ChampionHeader.module.css'

const ChampionHeader = ({nav,data,width,loading,adReady }) => {
  const { cid,lane,vs } = nav ? nav : false
  if (vs > 0) return <></>
  return (
    <>
      <div className={styles.header}>
        <div className={styles.breadcrumbs}>
          <BreadCrumbs nav={nav} />
        </div>
        <div className={styles[width]}>
          { width !=='tiny' && width !=='xsmall' && <>
            <div>
              <div className={styles.championicons}>
                <div>
                  <CircleBig cid={cid} lane={lane} tier={!loading ? data.tier : ' '}/>
                  <div className={styles.extras}>
                    <div>
                      {nav.mythic>0 && <div className={styles.mythic}>Mythic<Mythic nav={nav} /></div> }
                      {nav.keystone>0 && <div className={styles.keystone}>Keystone<Keystone nav={nav} /></div> }
                    </div>
                    { data.damage && <DamageCircle physical={ data.damage.physical } magic={ data.damage.magic } trueDamage={ data.damage.true } /> }
                  </div>
                </div>
                <div>
                  <div className={styles.skills}><SkillList cid={cid} /></div>
                  <ChampionDescription width={width} data={data} nav={nav} />
                  { !loading && <ChampionStats data={data} /> }
                </div>
              </div>
            </div>
            <Rect width={width} loading={adReady} />
          </> }
          { (width === 'tiny' || width ==='xsmall') && <>
            <ChampionDescription width={width} data={data} nav={nav} />    
            { !loading && <ChampionStats data={data} /> }
          </>}
        </div>
      </div>
      { width !=='tiny' && width !=='xsmall' && width !=='small' &&<NVP width={width} loading={loading} /> }
    </>
  )
}


export default ChampionHeader
