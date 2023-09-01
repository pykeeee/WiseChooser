import RegionIcon from './RegionIcon'
import styles from './LanguageIcon.module.css'

const languages = {
  eng:['en_US','English','en','English'],
  chn:['zh_CN','Chinese','zh','简体中文'],
  cze:['cs_CZ','Czech','cs','čeština'],
  deu:['de_DE','German','de','Deutsch'],
  esp:['es_ES','Spanish','es','Español'],
  fra:['fr_FR','French','fr','Français'],
  grc:['el_GR','Greek','el','Ελληνικά'],
  hun:['hu_HU','Hungarian','hu','Magyar'],
  ita:['it_IT','Italian','it','Italiano'],
  jpn:['ja_JP','Japanese','ja','日本語'],
  kor:['ko_KR','Korean','kr','한국어'],
  pol:['pl_PL','Polish','pl','Język Polski'],
  por:['pt_BR','Portuguese','pt','Português'],
  rom:['ro_RO','Romanian','ro','Românește'],
  rus:['ru_RU','Russian','ru','Русский язык'],
  tha:['th_TH','Thai','th','ภาษาไทย'],
  tur:['tr_TR','Turkish','tr','Türkçe'],
  vnm:['vn_VN','Vietnamese','vi','Tiếng Việt']
}

export const LanguageIcon = ({language, clickHandler }) => {
  if (!language) return ''
  return (
    <div className={styles.icon} onClick={ e => clickHandler(e.target.getAttribute('data-language'))} data-language={language} >
      <RegionIcon region={language} />
      <div>{languages[language][3]}</div>
    </div>
  )
}

export default LanguageIcon;
