import React, { useState } from "react";

export const OPContext = React.createContext(null);

export const OPContextProvider = ({children}) => {
  const [minLane,setMinLane] = useState('2')
  const [minGames,setMinGames] = useState('100')
  const [minPick,setMinPick] = useState('0')
  const [analysed, setAnalysed] = useState(false)
  const [averageWR, setAverageWR] = useState(false)
  const [live,setLive] = useState({name:'',region:''})
  const [patchNotes,setPatchNotes] = useState({})
  const [summoner, setSummoner] = useState([])
  const [summary, setSummary] = useState([])
  const [cidFilter, setCidFilter] = useState(false)
  const [qFilter, setQFilter] = useState(false)
  const [liveRedirect,setLiveRedirect] = useState(0)
  const contextValue = {
    live,setLive,
    minLane,setMinLane,
    minGames,setMinGames,
    minPick,setMinPick,
    analysed,setAnalysed,
    averageWR,setAverageWR,
    patchNotes,setPatchNotes,
    summoner,setSummoner,
    summary,setSummary,
    cidFilter,setCidFilter,
    qFilter,setQFilter,
    liveRedirect,setLiveRedirect
  }

  return <OPContext.Provider value={contextValue}>{children}</OPContext.Provider>
}
