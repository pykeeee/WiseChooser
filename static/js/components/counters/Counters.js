import { useState }  from 'react'
import CounterButtons from './CounterButtons'
import CountersPanel from './CountersPanel'

export const Counters2 = ({width,team,enemy,nav,pick,winRate,averageWR}) => {
  const [page,setPage] = useState(0)
  const handleClick = (e) => setPage(parseInt(e.target.getAttribute('data-id')))
  const lanes = ['top','jungle','middle','bottom','support']
  return (
    <>
      <CounterButtons width={width} active={page} handleClick={handleClick} />
      { lanes.map((l,i) =><CountersPanel key={i} width={width} nav={nav} data={page < 4 ? enemy[i] : team[i]} page={page} winRate={winRate} averageWR={averageWR} pick={pick} vsLane={l}/>)}
    </>
  )
}
export default Counters2
