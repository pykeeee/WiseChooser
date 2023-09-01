import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { champPath, ids } from '../misc/Static'
import { summonerURL } from '../misc/Util'
import ChampionName from '../misc/ChampionName'
import ChampionLink from '../links/ChampionLink'
import ChampionVsLink from '../links/ChampionVsLink'
import Champ from '../images/Champ'
import CloseIcon from '../icons/CloseIcon'
import SearchIcon from '../icons/SearchIcon'
import Trans from '../misc/Trans'
import useSearchParams from '../hooks/useSearchParams'
import styles from './Search.module.css'

const regions = [
  'br','eune','euw','jp','kr','lan','las','na',
  'oce','ph','ru','sg','th','tr','tw','vn']
const regionsN = {
  br:0,eune:1,euw:2,jp:3,kr:4,lan:5,las:6,na:7,
  oce:8,ph:9,ru:10,sg:11,th:12,tr:13,tw:14,vn:15
}


const Search = (({nav}) => {
  const [dropdown,setDropDown] = useState(false)
  const inputRef = useRef(null)
  let navigate = useNavigate()
  let {cid,mode,patch,tier,vs} = useSearchParams()
  const [value,setValue] = useState('')
  const [results,setResults] = useState(false)
  // const [localChamps,setLocalChamps] = useState(false)
  const localChamps = false

  const [selector,setSelector] = useState(regions.indexOf(localStorage.getItem('region')) !== -1 ? regionsN[localStorage.getItem('region')] : regionsN['na'])

  const clickSelector = (e) => {
    const id = parseInt(e.target.getAttribute('data-id'))
    setSelector(id)
    localStorage.setItem('region',regions[id])
    inputRef.current.focus()
  }
  
  const clearSearch = () => {
    setDropDown(false)
    setValue('')
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    let r = false
    if (localChamps && e.target.value.length) {
      let s = e.target.value
      r = Object.keys(localChamps).map((id)=> {
        let score = -100
        var test = localChamps[id].indexOf(s)
        if (test !== -1) {
          score = test ? 0 : 100
          score += (s.length - localChamps[id].length)
        }
        return [Number(id),score]
      }).filter(row => (row[1]>-100 && (vs>0 || row[0] !==cid))).sort((a, b) => (b[1] - a[1])).slice(0,4)
    }

    if (!r.length && e.target.value.length) {
      let searchText = e.target.value.replace(/[^a-z]/gi,'').toLowerCase()
      r = Object.keys(ids).map((name) => {
        let score = -100
        var test = name.indexOf(searchText)
        if (test !== -1) {
          score = test ? 0 : 100
          score += (searchText.length - name.length)
        }
        return [ids[name],score]
      }).filter(row => (row[1]>-100 && (vs>0 || row[0] !==cid))).sort((a, b) => (b[1] - a[1])).slice(0,3)
    }
    setResults(r)
  }

  const handleKeyDown = (e,tier,mode,patch) => {
    if (e.keyCode === 13) {
      if (results.length > 0) {
        const modePath = mode === 'ranked' ? '' : mode + '/'
        navigate(`/lol/${champPath(results[0][0])}/${modePath}build/?tier=${tier}&patch=${patch}`)
        setResults(false)
        clearSearch()
      } else {
        if (value.length>0) {
          window.location = summonerURL(regions[selector],e.target.value)
        }
      }
    }
  }

  return (
    <>
      <div className={styles.icon} onClick={() => setDropDown(!dropdown)}>
        <SearchIcon />
      </div>
      { dropdown && <div className={styles.overlay}>
        <div className={styles.cancelwrap}>
          <div className={styles.cancel} onClick={()=>{setValue(''); setDropDown(false)}}><CloseIcon /></div>
        </div>

        <input ref={inputRef}  className={styles.box} placeholder={'Search Champion Builds & Profiles'} value={value} autoFocus tabIndex="0" autoComplete="off" spellCheck="false" onChange={handleChange} onKeyDown={(e) =>handleKeyDown(e,tier,mode,patch)}/>

        { value.length > 0 && <div className={styles.results}>
        { results.length>0 && results.map((result,i)=>
          <div className={styles.row} key={i} >
            <div className={(cid <1) ? styles.fullwidth : ''}>
              <ChampionLink cid ={result[0]} nav={nav} ><div onClick={()=>clearSearch()}><Champ id={result[0]} type="champ32b" toolTip={false} /> <ChampionName cid={result[0]} /> Build</div></ChampionLink>
              { cid >0 && result[0] !== cid &&
                <ChampionVsLink cid={cid} vs={result[0]} nav={nav}><div onClick={()=>clearSearch()}><Champ id={cid} type="champ32b" toolTip={false} /> vs <Champ id={result[0]} type="champ32b" toolTip={false} /></div></ChampionVsLink>
              }
            </div>
            <div className={styles.sublinks}>
              <ChampionLink cid ={result[0]} page="leaderboard" nav={nav}><div onClick={()=>clearSearch()}><Trans trans="tabs::main::leaderboard" english="Leaderboard" maxChars={11} /></div></ChampionLink>
              <ChampionLink cid ={result[0]} page="counters" nav={nav}><div onClick={()=>clearSearch()}><Trans trans="tabs::main::counters" english="Counters"/></div></ChampionLink>
              <a href ={`https://pros.lol/champion/${champPath(result[0])}/probuilds/`}><div><Trans trans="tabs::main::probuilds" english="Pro Builds"/></div></a>
            </div>
          </div>
        )}

        <div className={styles.row}>
          <div className={styles.fullwidth}>
            <a href={summonerURL(regions[selector],value)}>
              <div className={styles.summoner} onClick={()=>clearSearch()}><div className={styles[regions[selector]]}>{regions[selector]}</div>{value}</div>
            </a>
          </div>
        </div>
        <div className={styles.regionselector}>
          {regions.slice(0,8).map((region,i)=><div key={i} className={selector===i ? styles['active'+region] : styles[region]} onClick={ e => clickSelector(e)} data-id={i}>{region}</div>)}
        </div>
        <div className={styles.regionselector}>
          {regions.slice(8,16).map((region,i)=><div key={i} className={selector===i+8 ? styles['active'+region] : styles[region]} onClick={ e => clickSelector(e)} data-id={i+8}>{region}</div>)}
        </div>
      </div>
      }


      </div> }
    </>
  )
})

export default Search
