import React, { useContext } from 'react'
import { LangContext } from '../../containers/LangContext'
import styles from './Trans.module.css'

const Trans = ({trans,english,maxChars=0}) => {
  const tips = useContext(LangContext)
  const translation = typeof tips.translation[trans] !== 'undefined' ? tips.translation[trans] : english
  if (maxChars === 0 || translation.length<=maxChars) return translation
  if (translation.length/maxChars<=1.2) return <span className={styles.small}>{translation}</span>
  return <span className={styles.smaller}>{translation}</span>
}

export default Trans
