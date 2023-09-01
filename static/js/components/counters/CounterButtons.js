import ButtonSet from '../champion/ButtonSet'
import Trans from '../misc/Trans'
import styles from './CounterButtons.module.css'

export const CounterButtons = ({width,active,handleClick}) => {
  const size = (width ==='tiny' || width ==='xsmall') ? 'small' : 'big'
  const btns = {
    small:{
      counters:[
        ['Common','buttons::counters::common'],
        ['Strong','buttons::counters::strong'],
        ['Weak','buttons::counters::weak'],
        ['Delta','general::delta']
      ],
      synergy:[
        ['Common','buttons::synergy::common'],
        ['Good','buttons::synergy::good'],
        ['Bad','buttons::synergy::bad'],
        ['Delta','buttons::synergy::synergy'],
        ['Normalised Delta','buttons::synergy::normaliseddelta']
      ]  
    },
    big:{
      counters:[
        ['Common Matchups','buttons::counters::commonmatchups'],
        ['Strong Against','buttons::counters::strongagainst'],
        ['Weak Against','buttons::counters::weakagainst'],
        ['Delta','general::delta']
      ],
      synergy:[
        ['Common Teammates','buttons::synergy::commonteammates'],
        ['Good Synergy','buttons::synergy::goodsynergy'],
        ['Bad Synergy','buttons::synergy::badsynergy'],
        ['Synergy Delta','buttons::synergy::synergydelta'],
        ['Normalised Synergy Delta','buttons::synergy::normalisedsynergydelta']
      ]
    }
  }
  return (
    <div className={styles.set}>
      <div className={styles.set1}>
        <div>Counters</div>
          <ButtonSet buttons = {btns[size].counters.map((btn,i)=><Trans english={btn[0]} trans={btn[1]} />)} active={active} handleClick={handleClick} />
      </div>
      <div className={styles.set2}>
        <div>Synergy</div>
        <ButtonSet buttons = {btns[size].synergy.map((btn,i)=><Trans english={btn[0]} trans={btn[1]} />)} offset={4} active={active} handleClick={handleClick} />
      </div>
    </div>
  )
}
export default CounterButtons
