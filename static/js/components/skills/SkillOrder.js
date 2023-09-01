import React from 'react'
import Skill from '../images/Skill'
import styles from './SkillOrder.module.css'

export const SkillOrder = ({skills,cid, type='light'}) => {
  return (
    <div className={styles[type]}>
      {['q','w','e','r'].map((spell,i)=>
        <div key={i}>
          <Skill cid={cid} id={spell.toLowerCase()} type="skill24" />
          { [...skills.toString()].map((skill,j) =>
            <React.Fragment key={j}>
              { skill !== '0' && <div className={(skill === (i+1).toString()) ? styles.active : ''}>{(skill === (i+1).toString()) ? (j+1) : '' }</div> }
            </React.Fragment> ) }
        </div>
      )}
    </div>
  )
}

export default SkillOrder
