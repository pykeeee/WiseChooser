import styles from './ModeButton.module.css'

export const ModeButton = ({mode,clickHandler,name }) => {
  if (!mode) return ''
  return (
    <div className={styles.wrapper} onClick={ e => clickHandler(e.target.getAttribute('data-id'))} data-id={mode} >
      {mode === 'ranked' && <><div>Ranked</div>Solo/Duo</> }
      {mode !== 'ranked' && <>Mode<div>{name}</div></> }
    </div>
  )
}

export default ModeButton
