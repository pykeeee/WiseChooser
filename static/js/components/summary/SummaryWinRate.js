import Tip from '../misc/Tip'
import Trans from '../misc/Trans'
import WinRate from '../misc/WinRate'
import styles from './SummaryWinRate.module.css'

export const SummaryWinRate = ({wr,games,tip=false, inline=false}) => {
  return (
    <div className={styles.wrgames}>
      <div className={styles[inline ? 'inline' : 'block']}>
        <div>
          <WinRate wr={wr.toFixed(1)} text={<>% <Trans trans="general::winrate" english="Win Rate"/></>} />
          { tip && <Tip name={tip} />}
        </div>
        <div className={styles.games}>{games.toLocaleString()} <Trans trans="general::games" english="Games"/></div>
      </div>
    </div>
  )
}

export default SummaryWinRate
