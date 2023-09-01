import RuneCell from './RuneCell'
import styles from './RuneRow.module.css'

const RuneRow = ({nav,page,summary,data, row, type, runeRow }) => {
  return (
    <div className={styles.runerow}>
      { row.map((rune,i) => <RuneCell key={i}rune={rune} type={type} runeRow={runeRow} nav={nav} page={page} summary={summary} data={data} /> )}
    </div>
  )
}

export default RuneRow
