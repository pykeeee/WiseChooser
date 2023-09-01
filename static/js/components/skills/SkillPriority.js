import React from 'react'
import AngleRightIcon from '../icons/AngleRightIcon'
import Skill from '../images/Skill'
import styles from './SkillPriority.module.css'

export const SkillPriority = ({cid,skills,order=false}) => {
  return (
    <div className={styles[order ? 'skillpriority' : 'skillorder']}>
      { [...skills.toString()].map((skill,i) => {
        if (order !== true) skill = ['q','w','e','r'][skill-1]
        return (
          <React.Fragment key={i}>
            <Skill cid={cid} id={skill.toLowerCase()} type="skill36" tipType="skill"/>
            {(order === true && i!==2) && <div key={'g'+i} className = {styles.skillnext}> <AngleRightIcon /> </div> }
          </React.Fragment>
        )
      }) }
    </div>
  )
}

export default SkillPriority
