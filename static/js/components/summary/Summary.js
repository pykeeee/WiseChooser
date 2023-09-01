import { useState }  from 'react'
import ButtonSet from '../champion/ButtonSet'
import SummarySkillOrder from './SummarySkillOrder'
import SummarySkillPriority from './SummarySkillPriority'
import SummaryRunes from './SummaryRunes'
import SummaryShowItems from './SummaryShowItems'
import SummaryStarting from './SummaryStarting'
import SummarySums from './SummarySums'
import Trans from '../misc/Trans'
import styles from './Summary.module.css'

export const Summary = ({cid,data ,pick,width}) => {
  const [page,setPage] = useState(0)
  const handleClick = (e) => setPage(parseInt(e.target.getAttribute('data-id')))
  let itemTitles = [<Trans trans="item::startingitems" english="Starting Items"/>,
                    <Trans trans="item::corebuild" english="Core Build"/>,
                    <><Trans trans="item::item" english="Item"/> 4</>,
                    <><Trans trans="item::item" english="Item"/> 5</>,
                    <><Trans trans="item::item" english="Item"/> 6</>]
  if (pick < 100 || !data) return <div className={styles.quick}><h2>Insufficient data available for the selected parameters to provide meaningful quick summary.</h2></div>

  const runes = data.runes[page ? 'pick' : 'win']
  const order = data.skillorder[page ? 'pick' : 'win']
  const priority = data.skillpriority[page ? 'pick' : 'win']
  const items = data.items[page ? 'pick' : 'win']
  let sums = {}
  if (!data.sum) {
    sums.sum1 = data.sums[0]
    sums.sum2 = data.sums[1]
  } else {
    sums = data.sum[page ? 'pick' : 'win']  
    sums.sum1 = Number(sums.id.split('_')[0])
    sums.sum2 = Number(sums.id.split('_')[1])
  }
  if (!items.start) itemTitles[0] = ''

  let startCount = {}, startSet = [] 
  if (items.start) {
    startSet = items.start.set.filter((v, i, a) => a.indexOf(v) === i)
    items.start.set.forEach((item,i) => {
      startCount[item] = (startCount[item] || 0) + 1
    })
  }
  let core = []
  if (items.core && items.core.n > 0) core = [{id:items.core.set[0]},{id:items.core.set[1],wr:items.core.wr,n:items.core.n},{id:items.core.set[2]}]
  if (items.item1) core = [items.item1,items.item2,items.item3]

  let view = 'full'
  if ( width === 'small' ) view = 'small'
  if ( width ==='xsmall' || width ==='tiny' ) view = 'tiny'
  return (
    <>
      <ButtonSet
        active={page}
        handleClick={handleClick} 
        buttons = {
          [
            <Trans trans="buttons::summary::highestwinbuild" english="Highest Win Build"/>,
            <Trans trans="buttons::summary::mostcommonbuild" english="Most Common Build"/>
          ]
        }
      />
      { view === 'full' && <div className={styles.full}>
          <div className={styles.row1}>
            <div>
              <SummarySkillPriority cid={cid} priority={priority} />
              <SummarySums sums={sums} />
            </div>
            <SummarySkillOrder cid={cid} order={order} />
            { runes.wr && <SummaryRunes runes={runes} /> }
          </div>
          <div className={styles.row2}>
            { itemTitles.map((title,i) =><div key={i}>{title}</div>)}
          </div>
          <div className={styles.row3}>
            <SummaryStarting start={items.start} startSet={startSet} startCount={startCount} page={page} />
            <SummaryShowItems items={core} core={true} />
            { [4,5,6].map((n,i)=><SummaryShowItems key={i} items={items['item'+n]} />) }
          </div>
        </div>
      }
      { view === 'small' && <div className={styles.small}>
        <div className={styles.split} >
          <div>
              <SummarySkillPriority cid={cid} priority={priority} />
              <SummarySums sums={sums} />
          </div>
          <div>
            <SummarySkillOrder cid={cid} order={order} />
          </div>
        </div>
        <div>
          { runes.wr && <SummaryRunes runes={runes} /> }
        </div>
        <div className={styles.triple}>
          { [itemTitles[0],itemTitles[1],itemTitles[2]].map((title,i) =><div key={i}>{title}</div>)}
        </div>
        <div className={styles.triple}>
            <SummaryStarting start={items.start} startSet={startSet} startCount={startCount} page={page} />
            <SummaryShowItems items={core} core={true} />
            <SummaryShowItems items={items.item4} />
        </div>
        <div className={styles.split}>
          { [itemTitles[3],itemTitles[4]].map((title,i) =><div key={i}>{title}</div>)}
        </div>
        <div className={styles.split} >
          <SummaryShowItems items={items.item5} />
          <SummaryShowItems items={items.item6} />
        </div>
      </div> }

      { view === 'tiny' && <div className={styles.tiny}>
        { runes.wr && <SummaryRunes runes={runes} /> }
        <SummarySkillOrder cid={cid} order={order} />
        <div className={styles.split}>
          <SummarySkillPriority cid={cid} priority={priority} />
          <SummarySums sums={sums} />
        </div>
        <div>{itemTitles[0]}</div>
        <SummaryStarting start={items.start} startSet={startSet} startCount={startCount} page={page} />
        <div className={styles.split}>
          { [itemTitles[1],itemTitles[2]].map((title,i) =><div key={i}>{title}</div>)}
        </div>
        <div className={styles.split}>
            <SummaryShowItems items={core} core={true} />
            <SummaryShowItems items={items.item4} />
        </div>
        <div className={styles.split}>
          { [itemTitles[3],itemTitles[4]].map((title,i) =><div key={i}>{title}</div>)}
        </div>
        <div className={styles.split} >
          <SummaryShowItems items={items.item5} />
          <SummaryShowItems items={items.item6} />
        </div>        
      </div> }
    </>
  )
}

export default Summary
