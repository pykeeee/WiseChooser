import { useContext } from 'react'
import { LangContext } from '../../containers/LangContext'
import { champName } from '../misc/Static'

export const ChampionName = ({cid}) => {
  const tips = useContext(LangContext)
  if(tips.translation.champions && tips.translation.champions[cid]) return <>{tips.translation.champions[cid]}</>
  return champName(cid)
}

export default ChampionName
