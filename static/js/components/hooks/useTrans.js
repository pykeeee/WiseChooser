import { useContext } from 'react'
import { LangContext } from '../../containers/LangContext'

export const useTrans = (trans,english) => {
  const tips = useContext(LangContext)
  const translation = typeof tips.translation[trans] !== 'undefined' ? tips.translation[trans] : english
  return translation
}
export default useTrans
