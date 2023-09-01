import Trans from '../misc/Trans'
import styles from './RuneHeading.module.css'

const RuneHeading = ({n}) => {
  return (
    <div className={styles.runeheading}>
      { [...Array(n).keys()].map((r,i) =><div key={i}>
        <div className={styles.win}><Trans trans="general::winrate" english="Win Rate" maxChars={10} /></div>
        <div className={styles.pick}><Trans trans="general::pickrate" english="Pick Rate" maxChars={10} /></div>
        <div className={styles.games}><Trans trans="general::games" english="Games" maxChars={10} /></div>
      </div> )}
    </div>
  )
}

export default RuneHeading
