import { useRef }  from 'react'
import LaneIcon from '../misc/LaneIcon'
import Panel from '../champion/Panel'
import useShow from '../hooks/useShow'
import styles from './CountersPanel.module.css'

export const CountersPanel = ({data,width,page,vsLane,nav,pick,winRate,averageWR}) => {
  const ref = useRef(null)
  const hasData = typeof data !=='undefined'
  const show = useShow(ref) && hasData
  let d = []
  if (show) {
    const delta2Offset = averageWR-50
    if (page<4) {
      d = data.map((row) => [
        row[0],
        (row[2]/row[1]*100).toFixed(2),
        (row[1]/pick*100).toFixed(2),
        row[1].toLocaleString(),
        (row[2]/row[1]*100+row[3]-100).toFixed(2),
        (row[2]/row[1]*100 - 100/(1+Math.pow(10,(Math.log10(100/winRate-1)-Math.log10(100/row[3]-1))))-delta2Offset).toFixed(2)
      ])
    } else {
      d = data.map((row) => [
        row[0],
        (row[2]/row[1]*100).toFixed(2),
        (row[1]/pick*100).toFixed(2),
        row[1].toLocaleString(),
        (row[2]/row[1]*100-(winRate + row[3])/2).toFixed(2),
        row[2]/row[1]*100 - 100/(1+Math.pow(10,Math.log10(100/row[3]-1)+Math.log10(100/winRate-1)))+delta2Offset,    
      ])
    }
    
    if ((page > 0 && page <4) || page > 4) d = d.filter(row => row[2]>=0.5)
        if (page === 1 || page === 5) d.sort((a, b) => b[1] - a[1])
        if (page === 2 || page === 6) d.sort((a, b) => a[1] - b[1])
        if (page === 3 || page === 7) d.sort((a, b) => b[4] - a[4])
        if (page ===8) d.sort((a, b) => b[5] - a[5])
  }
  return (
    <div className={styles[hasData ? 'counters' : '']} ref={ref}>
      { show && <Panel width={width} nav={nav} data={d}
        type={page < 4 ? 'counter' : 'synergy'} title={<LaneIcon lane = {vsLane} />} title2={page < 4 ? "Counter" : "Synergy"} vsLane={vsLane} />
      }
    </div>
  )
}
export default CountersPanel
