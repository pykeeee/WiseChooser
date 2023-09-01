import {useRef, useEffect, useState, useMemo } from 'react'
import * as d3 from 'd3'
import useChampionName from '../hooks/useChampionName'
import useShow from '../hooks/useShow'
import useTrans from '../hooks/useTrans'
import styles from './Graph.module.css'

const Graph = ({ graphKey, data, type, visible,cid,width }) => {
  const chart = useRef(null)
  const graphtip = useRef(null)
  const [lastVisible,setLastVisible] = useState([])
  const [lastGraphKey,setLastGraphKey] = useState([])
  const [lastWidth, setLastWidth] = useState(width)

  const show = useShow(chart)
  const win =useTrans('general::winrate','Win Rate'),
  pick =useTrans('general::pickrate','Pick Rate'),
  games = useTrans('general::gamecount','Game Count'),
  ban =useTrans('general::banrate','Ban Rate'),
  name = useChampionName(cid)


  const chartTitles = useMemo(() => {
    return { win:win, pick:pick, games:games, ban:ban, name:name}},
    [win,pick,games,ban,name])

  useEffect(() => {
    if (show && data && (lastVisible.length !== visible.length || graphKey !== lastGraphKey || width !== lastWidth )) {
      setLastVisible(visible)
      setLastGraphKey(graphKey)
      setLastWidth(width)
      let chartWidth = chart.current.offsetWidth
      let yValues = []
      let xValues = []
      data.forEach(sets => sets.forEach(values => { 
        yValues.push(values.v)
        xValues.push(values.d)}))
      yValues.sort((a, b) => a - b)
      let minY = Math.floor(yValues[0])
      let maxY = Math.ceil(yValues.pop())
      xValues.sort((a, b) => a - b)
      let minDate = xValues[0]
      let maxDate = xValues.pop()
      let every = (maxDate-minDate)/86400000 >= 20 ? 3 : 2
      let margin = {top: 30, right: 16, bottom: 40, left: 34}
      if (type==='games') margin.left = 45
      let d3Width = chartWidth - margin.left - margin.right
      let height = 290 - margin.top - margin.bottom;
      let xScale = d3.scaleTime().domain([minDate, maxDate]).range([0, d3Width]);
      let yScale = d3.scaleLinear().domain([minY, maxY]).range([height, 0]);
      let line = d3.line().x((d) => xScale(d.d)).y((d) => yScale(d.v)).curve(d3.curveMonotoneX);
      let svg = d3.select(chart.current).html("").append("svg")
        .attr("width", d3Width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom)
        .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      svg.append("g").attr("class", styles['x']).attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%d-%b")).ticks(d3.timeDay.every(every)))
      svg.append("text").attr("x", (d3Width / 2)).attr("y", 0 - (margin.top * 1/3)).attr("class",styles['title_'+type]).text(chartTitles.name+' '+chartTitles[type]);
      svg.selectAll('.'+styles['x'] + " text").attr("transform", function() {
        return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)"
      })

      svg.append("g").attr("class", styles['y']).call(d3.axisLeft(yScale))

      let formatTime = d3.timeFormat("%e %b");
      let tip = d3.select(graphtip.current).style("opacity", 0)
      const addLine = (n) => {
        svg.append("path").datum(data[n]).attr("class", styles['line_'+visible[n]]).attr("d", line)
        svg.selectAll(".dot"+n).data(data[n]).enter().append("circle").attr("class", styles['dot_'+visible[n]])
          .attr("cx", (d) => xScale(d.d) ).attr("cy", (d) => yScale(d.v) ).attr("r", 2)
          .on("mouseover", function (event,d) {
            d3.select(this).transition().duration('100').attr("r", 4)
            tip.transition().duration(200).style("opacity", .9);
            tip.html(formatTime(d.d) + "<br/>"  + d.v.toLocaleString())
              .attr('class',styles['tip_'+visible[n]])
              .style("left", (this.getBoundingClientRect().left-chart.current.getBoundingClientRect().left - 36 ) + "px")
              .style("top", (this.getBoundingClientRect().top-chart.current.getBoundingClientRect().top - 290 ) + "px")    
            })
          .on("mouseout", function() {
            d3.select(this).transition().duration('100').attr("r", 2)
            tip.transition().duration(500).style("opacity", 0)
          })
      }
      for (let i=0; i<visible.length; i++) addLine(i)
    }
  },[ show, data, type, visible,graphKey, lastVisible, lastGraphKey,chartTitles,width,lastWidth])

  return (
    <div className={styles.graph} >
      <div ref={chart}></div>
      <div ref={graphtip}></div>
    </div>
  )
}

export default Graph
