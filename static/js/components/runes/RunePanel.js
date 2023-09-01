import RuneRow from './RuneRow'
import styles from './RunePanel.module.css'

export const RunePanel = ({nav,page,summary,data, panel, type }) => {
  return(
    <div className={styles.runetype}>
      { panel.slice((type==='pri'?0:1),4).map((row,i) =>
        <RuneRow key={i} row={row} type={type} runeRow={i} nav={nav} page={page} summary={summary} data={data} /> )}
    </div>
  )
}

export default RunePanel
