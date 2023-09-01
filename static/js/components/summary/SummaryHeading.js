import Trans from '../misc/Trans'
import Tip from '../misc/Tip'
import styles from './SummaryHeading.module.css'

export const SummaryHeading = ({heading}) => {
  return (
    <div className={styles.heading}>
      <Trans trans={heading.trans} english={heading.english}/>
      { heading.tip && <Tip name={heading.tip} /> }
    </div>
  )
}

export default SummaryHeading
