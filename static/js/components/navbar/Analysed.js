import TierName from '../misc/TierName'
import Tip from '../misc/Tip'
import Trans from '../misc/Trans'
import styles from './Analysed.module.css'

const Analysed = ({nav,analysed,averageWR}) => {
  return (
    <div className={styles.wrapper}>
      { analysed !== 0 && <>
          <Trans trans="general::average" english="Average" maxChars={9}/> <TierName tier={nav.tier} /> <Trans trans="general::winrate" english="Win Rate" maxChars={10}/>: { averageWR }%<Tip name="averagewr"/><br />
          <TierName tier={nav.tier} /> <Trans trans="general::analysed" english="Champions Analysed" maxChars={18}/>: { analysed }<Tip name="analysed"/>
        </>
      }
    </div>
  )
}

export default Analysed
