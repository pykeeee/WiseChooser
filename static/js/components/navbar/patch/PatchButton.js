import React from 'react'
import styles from './PatchButton.module.css'

export const PatchButton = ({patch,clickHandler }) => {
  if (!patch) return ''
  return (
    <div className={styles.wrapper} onClick={ e => clickHandler(e.target.getAttribute('data-id'))} data-id={patch} >
      {(patch === '7' || patch === '14' || patch === '30') && <><div>{patch}</div>Days</> }
      {(patch !== '7' && patch !== '14' && patch !== '30') && <>Patch<div>{patch}</div></> }
    </div>
  )
}

export default PatchButton
