import SummaryHeading from './SummaryHeading'
import Spell from '../images/Spell'
import SummaryWinRate from './SummaryWinRate'
import styles from './SummarySums.module.css'

export const SummarySums = ({sums}) => {
  return (
    <div>
      { sums && <>
        <SummaryHeading heading={{trans:'general::summonerspells',english:'Summoner Spells',tip:''}} />
        <div className={styles.sums}>
          <Spell id={sums.sum1} type="spell32br" tipType="spell"/>
          <Spell id={sums.sum2} type="spell32br" tipType="spell" />
        </div>
        <SummaryWinRate wr={sums.wr} games={sums.n} inline={true} />
      </> }
  </div>
  )
}

export default SummarySums
