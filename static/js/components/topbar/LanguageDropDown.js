import React, { useState, useContext, useRef } from 'react'
import { LangContext } from '../../containers/LangContext'
import { TipContext } from '../../containers/TipContext'
import LanguageIcon from './LanguageIcon'
import useOnClickOutside from '../hooks/useOnClickOutside'
import styles from './LanguageDropDown.module.css'

const languageList = [
  'eng','chn','cze','deu','esp','fra','grc','hun','ita','jpn','kor','pol','por','rom','rus','tha','tur','vnm'
]

const LanguageDropDown = () => {
  const lang = useContext(LangContext)
  const tips = useContext(TipContext)
  const [dropdown,setDropDown] = useState(false)
  const ref = useRef(null)
  const toggleDropDown = () => setDropDown(!dropdown)
  const selectLanguage = (language) => {
    localStorage.setItem('language',language)
    lang.setLang(language)
    tips.setLang(language)
    setDropDown(false)
  }
  useOnClickOutside(ref, () => setDropDown(false))

  return (
   <div className={styles.languagedropdown} ref={ref}>
      <div className = {styles.selectedlang}>
        <LanguageIcon language={lang.lang} clickHandler={toggleDropDown} />
      </div>
      { dropdown && <div className={styles.languageoptions}>
        { languageList.map((language, i) =>
          <LanguageIcon key={i} language={language} clickHandler={selectLanguage} />
        )}
      </div> }
    </div>
  )
}

export default LanguageDropDown
