import LaneIcon from '../../misc/LaneIcon'
import NavLink from '../NavLink'
import styles from './LanePicker.module.css'

const LanePicker = ({ lanes,nav,lanePercent,vs=false}) => {
  if (nav.mode!=='ranked') return ''
  let laneTitles = {default:'MAIN',top:'TOP',jungle:'JNG',middle:'MID',bottom:'BOT',support:'SUP'}
  if (nav.view ==='tier') laneTitles.default = 'ALL'
  if (lanePercent) lanes.forEach((lane,i) => laneTitles[lane] = Number(lanePercent[i]).toFixed(1)+'%')

  return (
    <div className={styles.wrapper}>
      <div className={styles.picker}>
        { lanes.map((l, i) =>
          <NavLink key={i} lane={vs ? nav.lane : l} vsLane={vs ? l : ''} nav={nav} baseURL={nav.baseURL}>
            <div className={styles.outer}>
              <div className={vs ? (nav.vsLane===l ? styles.inneractive : styles.inner) : (nav.lane ===l ? styles.inneractive : styles.inner )}>
                <LaneIcon lane={l} />
              </div>
              { laneTitles[l] }
            </div>
          </NavLink>
        )}
    </div>
  </div>
  )
}

export default LanePicker
