import RuneCell from './RuneCell'
import styles from './RuneStatPanel.module.css'

export const RuneStatPanel = ({nav,page,summary,data, type, panel,runeRow }) => {
  return (
    <div className={styles.runetype}>
      { panel.map((rune,i) => <RuneCell key={i} type={type} rune={rune} runeRow={runeRow} nav={nav} page={page} summary={summary} data={data} /> )}
    </div>
  )
}

export default RuneStatPanel
