import {useRef, useEffect} from 'react'
import * as d3 from 'd3'
import styles from './DamageCircle.module.css'

export const Circle = ({physical,magic,trueDamage}) => {
  const chart = useRef(null)
  const charttip = useRef(null)
  const total = physical+magic+trueDamage
  const pd = total ? Math.round(physical/total*100) : 0
  const md = total ? Math.round(magic/total*100) : 0
  const td = total ? Math.round(trueDamage/total*100) : 0
  const data = [pd,md,td]
  const maxDamage = data.indexOf(Math.max(...data))
  const types = ['physicaldamage','magicdamage','truedamage']

  useEffect(() => {
    const radius = 40
    const width = 80
    const height = 80

    const svg = d3.select(chart.current).html('')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')')
        var totals = [{
          title: "Physical Damage",
          value: pd,
          type: 'physical',
          color: 'rgb(193,105,104)'
      },
      {
          title: "Magic Damage",
          value: md,
          type: 'magic',
          color: 'rgb(104,185,214)'
      },
      {
          title: "True Damage",
          value: td,
          type: 'true',
          color: 'rgb(223,223,223)'
      }
    ];

    const arc = d3.arc().innerRadius(radius - 17).outerRadius(radius - 1).padAngle(0.05)
    const pie = d3.pie().value(function (d) { return d.value; })

    let tip = d3.select(charttip.current).style("opacity", 0)
    svg.selectAll('path')
    .data(pie(totals))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('stroke', (d)=>d.data.color)
    .attr("fill-opacity", 0.5)
    .attr('fill', (d)=>d.data.color)
    .on("mouseover", function (event,d) {
      tip.transition().duration(200).style("opacity", .9)
      tip.html(d.value.toLocaleString()+ '% '+d.data.title)
        .attr('class',styles[d.data.type])
        .style("left", (event.offsetX + 15) + "px")
        .style("top", (event.offsetY - 110) + "px")
      })
    .on("mouseout", function() {
      tip.transition().duration(500).style("opacity", 0)
    })
  },[pd,td,md])

  return (
    <div className={styles.circle}>
      <div ref={chart}></div>
      <div className={styles[types[maxDamage]]}>{data[maxDamage]}%</div>
      <div ref={charttip}></div>
    </div>
  )
}
export default Circle
