import React from 'react'
import styles from './ViewButton.module.css'

const viewNames = {list:'List',grid:'Grid',tier:'Tier',delta:'Delta'}

export const ViewButton = ({view,clickHandler }) => {
  if (!view) return ''
  return (
    <div className={styles.button} onClick={ e => clickHandler(e.target.getAttribute('data-id'))} data-id={view} >
      <div>{viewNames[view]}</div>View
    </div>
  )
}

export default ViewButton
