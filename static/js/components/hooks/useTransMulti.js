import { useContext } from 'react'
import { LangContext } from '../../containers/LangContext'

export const useTransMulti = (multi) => {
  const tips = useContext(LangContext)
  let trans = {}
  multi.forEach((t)=> trans[t[0]] = typeof tips.translation[t[0]] !== 'undefined' ? tips.translation[t[0]] : t[1])
  return trans
}
export default useTransMulti
