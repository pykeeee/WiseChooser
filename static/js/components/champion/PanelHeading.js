import Tip from '../misc/Tip'
import Trans from '../misc/Trans'
import styles from './PanelHeading.module.css'

export const PanelHeading = ({ title,title2,type,spacer=true}) => {
  return (
    <div className={styles[type]}>
      <div className={styles.title}>{title}</div>
      {title2 && <div className={styles[type+'_subtitle']}>{title2}</div>}
      <div className={styles.subtitles}>
        <div className={styles.win}><Trans trans="general::winrate" english="Win Rate" maxChars={10} /></div>
        { 
          type === 'counter' && <>
            <div className={styles.delta}><Trans trans="general::delta" english="Delta" maxChars={10}/> 1<Tip name="delta1" type="inline" /></div>
            <div className={styles.delta2}><Trans trans="general::delta" english="Delta" maxChars={10}/> 2<Tip name="delta2" type="inline" /></div>
          </>
        }
        { 
          type === 'synergy' && <>
            <div className={styles.delta}><Trans trans="general::delta" english="Delta" maxChars={10}/> 1<Tip name="deltasyn" type="inline" /></div>
            <div className={styles.delta2}><Trans trans="general::delta" english="Delta" maxChars={10}/> 2<Tip name="deltasyn2" type="inline" /></div>
          </>
        }
        <div className={styles.pick}><Trans trans="general::pickrate" english="Pick Rate" maxChars={10} /></div>
        <div className={styles.games}><Trans trans="general::games" english="Games" maxChars={15}/></div>
        { (type === 'item' || type === 'item3' || type === 'mythic') && <div className={styles.time}><Trans trans="general::time" english="Time" maxChars={10} /></div> }
        {spacer && <div className={styles.spacer}></div>}
      </div>
    </div>
  )
}

export default PanelHeading