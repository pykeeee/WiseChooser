import {useEffect, useRef, useMemo, useState} from 'react'
import * as d3 from 'd3'
import useShow from '../hooks/useShow'
import useTrans from '../hooks/useTrans'
import styles from './SimpleGraph.module.css';

const SimpleGraph = ({type, time, timeWin, width}) => {
  const [lastWidth, setLastWidth] = useState(width)
  const chart = useRef(null)
  const show = useShow(chart)
  const graphtip = useRef(null)
  const wrlchart=useTrans("graphs::heading::wrvslength","Win Rate vs Game Length"),
        wrdistchart=useTrans("graphs::heading::gamelength","Game Length Distribution")


  const chartTitles = useMemo(() => { return { wrlchart:wrlchart, wrdistchart:wrdistchart}},[wrlchart,wrdistchart])
  useEffect(() => {
    if (width !== lastWidth) setLastWidth(width)
  },[width,lastWidth])

  useEffect(() => {
    if (show) {
      let minY=100, maxY=0, v=0, t=0
      let dataset = []
      if (type === 'wrdistchart') Object.keys(time).forEach(i => t+= time[i])
      const count = Object.keys(time).reduce((max,time)=>time>max ? time : max,0)
      for(let i=1;i<=count;i++) {
        if (type === 'wrlchart') v = (timeWin && typeof timeWin[i] !== 'undefined' && typeof time[i] !== 'undefined')  ? timeWin[i]/time[i]*100 : 0
        else v = time && typeof time[i] !== 'undefined' ? (time[i]||0)/t*100 : 0
        if (v > maxY) maxY = v
        if (v < minY) minY = v
        dataset.push({d:(i-1),v:v.toFixed(2)})
      }
      const minX = 0
      const maxX = count-1
    
      minY = Math.floor(minY);
      maxY = Math.ceil(maxY);
      let chartWidth = chart.current.offsetWidth
      const margin = { top:30, right:20, bottom:20, left:30 },
          width = chartWidth - margin.left - margin.right,
          height = 220 - margin.top - margin.bottom
      const xScale = d3.scaleLinear().domain([minX, maxX]).range([0, width])
      const yScale = d3.scaleLinear().domain([minY, maxY]).range([height, 0])
      const line = d3.line().x((d, i)=>xScale(d.d)).y((d)=>yScale(d.v)).curve(d3.curveMonotoneX)
    
      let svg = d3.select(chart.current).html("").append("svg")
          .attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom)
          .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      const ticks = [0,1,2,3,4,5,6]
      const tickLabels = ['0-15','15-20','20-25','25-30','30-35','35-40','40+']
      svg.append("g").attr("class", styles['x']).attr("transform", "translate(0," + height + ")").call(d3.axisBottom(xScale).tickValues(ticks)
        .tickFormat((d,i)=>tickLabels[i]))
      const tip = d3.select(graphtip.current).style("opacity", 0)
      svg.append("text").attr("x", (width / 2)).attr("y", 0 - (margin.top * 1/3)).attr("class",styles['title_'+type]).text(chartTitles[type])
      svg.append("g").attr("class",  styles['y']).call(d3.axisLeft(yScale).ticks(Math.min(maxY-minY,10)))
      svg.append("path").datum(dataset).attr("class", styles['line_'+type]).attr("d", line)
      svg.selectAll(''+styles['dot_'+type]).data(dataset).enter().append("circle").attr("class", styles['dot_'+type])
        .attr("cx",(d)=>xScale(d.d)).attr("cy", (d)=>yScale(d.v)).attr("r", 2)
        .on("mouseover", function(event,d) {
          d3.select(this).transition().duration('100').attr("r", 4)
          tip.transition().duration(200).style("opacity", .9)
          tip.html(tickLabels[d.d] + "<br/>"  + d.v.toLocaleString())
            .style("left", (this.getBoundingClientRect().left-chart.current.getBoundingClientRect().left + 6 ) + "px")
            .style("top", (this.getBoundingClientRect().top-chart.current.getBoundingClientRect().top - 220 ) + "px")
        })
      .on("mouseout", function() {
        d3.select(this).transition().duration('100').attr("r", 2)
        tip.transition().duration(500).style("opacity", 0)
      })
    }
  },[type, time, timeWin,chartTitles,show])

  return (
    <div className={styles.simplegraph}>
      <div ref={chart}></div>
      <div ref={graphtip} className={styles['tip_'+type]}></div>
    </div>
  )
}

export default SimpleGraph
