import React from 'react'
import PropTypes from 'prop-types'
import styles from './FilterBox.module.css'

const FilterBox = ({value,onChange,title}) => {
  const re = /^[0-9\b]+$/;
  return (
    <div>
      <div className={styles.filter}>
        {title}
        <input value={value} tabIndex="0" autoComplete="off" spellCheck="false"
          onChange={e => {
            if (e.target.value === '' || re.test(e.target.value)) {
              onChange(e.target.value)}
            }
          }
        />
      </div>
    </div>
  )
}

FilterBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default FilterBox
