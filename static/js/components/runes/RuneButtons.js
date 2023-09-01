import Trans from '../misc/Trans'
import ButtonSet from '../champion/ButtonSet'

const RuneButtons = ({active,handleClick }) => {
  return (
    <ButtonSet
    buttons = {[<Trans trans="buttons::runes::overview" english="Overview" />,
                <Trans trans="buttons::runes::highestwinrunepage" english="Highest Win Rune Page" />,
                <Trans trans="buttons::runes::mostpickedrunepage" english="Most Picked Rune Page" />,
               ]}
      active={active} handleClick={handleClick} />
  )
}

export default RuneButtons
