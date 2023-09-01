export const WinRate = ({wr = 0,mid=50,incr = 1, text}) => {
  const colors = [
    ['#aaccaf','#88c585','#67bb5b','#46af2e','#24a300'],
    ['#d8a6ab','#d8746b','#d8746b','#d85c4b','#d8442b']
  ]
  let type = wr >=mid ? 0 : 1
  let intensity = Math.min(Math.round(Math.abs(wr-mid)/incr),4)
  return (
    <div style={{color:`${colors[type][intensity]}`}} >{wr}{text}</div>
  )
}

export default WinRate
