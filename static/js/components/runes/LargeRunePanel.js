import { useRef, useState} from 'react'
import RuneButtons from './RuneButtons'
import RunePanel from './RunePanel'
import RuneHeading from './RuneHeading'
import RuneStatPanel from './RuneStatPanel'
import useShow from '../hooks/useShow'
import styles from './LargeRunePanel.module.css'

const structure = [
  [[8005,8008,8021,8010],[9101,9111,8009],[9104,9105,9103],[8014,8017,8299]],
  [[8112,8124,8128,9923],[8126,8139,8143],[8136,8120,8138],[8135,8134,8105,8106]],
  [[8214,8229,8230],[8224,8226,8275],[8210,8234,8233],[8237,8232,8236]],
  [[8437,8439,8465],[8446,8463,8401],[8429,8444,8473],[8451,8453,8242]],
  [[8351,8360,8369],[8306,8304,8313],[8321,8316,8345],[8347,8410,8352]],
  [[5008,5005,5007],[5008,5002,5003],[5001,5002,5003]]
]

export const LargeRunePanel = ({data, summary, nav=false }) => {
  const ref = useRef(null)
  const show = useShow(ref)
  const [page,setPage] = useState(0)
  const handleClick = (e) => setPage(parseInt(e.target.getAttribute('data-id')))

  return (
    <div ref={ref} className={styles[show ? '' : 'placeholder']}>
      { show && data && <>
        <div ref={ref}><RuneButtons active={page} handleClick={handleClick} /></div>
        <div className = {styles.wrapper} >
          <RuneHeading n={4} />
          <div className={styles.runepanel}>
            { structure.slice(0,5).map((panel,i) =>
              <RunePanel key={i} panel={panel} type="pri" nav={nav} page={page} summary={summary} data={data} /> )}
          </div>
        </div>
        <div className = {styles.wrapper}>
          <RuneHeading n={3} />
          <div className = {styles.runepanel}>
            { structure.slice(0,5).map((panel,i) =>
              <RunePanel key={i} panel={panel} type="sec"  nav={nav} page={page} summary={summary} data={data} /> )}
          </div>
        </div>
        <div className = {styles.wrapper}>
          <RuneHeading n={1} />
          <div className = {styles.statmod}>
            { structure[5].map((panel,i) =>
              <RuneStatPanel key={i} panel={panel} type="mod" primary={false} runeRow={i} nav={nav} page={page} summary={summary} data={data}/> )}
          </div>
        </div>
      </> }
    </div>
  )
}

export default LargeRunePanel
