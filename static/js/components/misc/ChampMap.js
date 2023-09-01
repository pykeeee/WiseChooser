import React from 'react'
import { Link} from 'react-router-dom'
import { champName, champPath, ids, queueSetting } from '../misc/Static'
import styles from './ChampMap.module.css'

const ChampMap = ({ mode, cid=0 }) => {
  const settings = queueSetting(mode)
  if (mode !=='ranked') cid = 0
  return (
    <div className={styles.wrapper}>
      <h1>LoL Champion {settings.title} Builds</h1>
      { cid>0 && <>
        <Link to={{ pathname: `/lol/${champPath(cid)}/` }}>
          { champName(cid)} Build
        </Link>

        {Object.keys(ids).map((n,i) =>
        <React.Fragment key={i}> • { ids[n]!==cid && <Link to={{ pathname: `/lol/${champPath(cid)}/vs/${n}/build/` }}>
          {champName(cid)} vs { champName(ids[n])}
        </Link>}</React.Fragment>
      )}</> }
      { cid===0 && Object.keys(ids).map((n,i) =>
        <Link key={i} to={{ pathname: `/lol/${n}/${mode !=='ranked' ? mode +'/' : ''}build/` }}>
          { champName(ids[n])} {settings.title} Build <> • </>
        </Link>
      )}
    </div>
  )
}

export default ChampMap
