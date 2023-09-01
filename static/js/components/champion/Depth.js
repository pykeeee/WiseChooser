import React, {useEffect, useRef, useMemo} from 'react'
import * as d3 from 'd3'
import useShow from '../hooks/useShow'
import useTrans from '../hooks/useTrans'
import styles from './Depth.module.css'

const SimpleGraph = ({width,data}) => {
  const chart = useRef(null)
  const show = useShow(chart)
  const graphtip = useRef(null)
  const main = useTrans("graphs::heading::ncrpb","Normalised Champion Ranked Player Base")
  const x = useTrans("graphs::heading::breadth","Breadth (How much a champion is picked)")
  const y = useTrans("graphs::heading::depth","Depth (Games per player)")
  const popular =useTrans("graphs::popular","Popular")
  const unpopular = useTrans("graphs::unpopular","Unpopular")
  const niche = useTrans("graphs::niche","Niche")
  const broad = useTrans("graphs::broad","Broad")

  const titles = useMemo(() => {
    return { main:main,x:x,y:y,popular:popular,unpopular:unpopular,niche:niche,broad:broad}},
    [main,x,y,popular,unpopular,niche,broad])

  useEffect(() => {
    if (!show || !data) return
    const minX = 0.1
    const maxX = 9.9
    const minY = 0.5
    const maxY = 2
    let chartWidth = chart.current.offsetWidth
    const margin = {top: 30, right: 20, bottom: 40, left: 45},
                    width = chartWidth - margin.left - margin.right,
                    height = 220 - margin.top - margin.bottom;
    const xScale = d3.scaleLog().domain([minX, maxX]).range([0, width]);
    const yScale = d3.scaleLog().domain([minY, maxY]).range([height, 0]);
    const dataset = [{d:data[2],v:[data[3]]}]
    let svg = d3.select(chart.current).html("").append("svg")
        .attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom)
        .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(xScale).tickFormat((d) => xScale.tickFormat(7,d3.format(".1"))(d)))
    svg.append("g").call(d3.axisLeft(yScale).ticks(10).tickFormat((d) => yScale.tickFormat(7,d3.format(",.1"))(d)))
    svg.append("text").attr("x", (width / 2)-10).attr("y", 0 - (margin.top * 1/3)).attr("class",styles.depthtitle).text(titles.main);
    const tip = d3.select(graphtip.current).style("opacity", 0)
    const make_x_gridlines = () => d3.axisBottom(xScale).ticks(1)
    const make_y_gridlines = () => d3.axisLeft(yScale).ticks(1)
    svg.append("g").attr("transform", "translate(0," + height + ")")
      .call(make_x_gridlines().tickSize(-height).tickFormat(""))
    svg.append("g").call(make_y_gridlines().tickValues([1]).tickSize(-width).tickFormat(""))
    svg.append("text").attr("class",styles.depthquadrant).attr("x", width/4 ).attr("y",  height/4 ).style("text-anchor", "middle").text(titles.niche)
    svg.append("text").attr("class",styles.depthquadrant).attr("x", width/4 ).attr("y",  height*3/4 ).style("text-anchor", "middle").text(titles.unpopular)
    svg.append("text").attr("class",styles.depthquadrant).attr("x", width*3/4 ).attr("y",  height/4 ).style("text-anchor", "middle").text(titles.popular)
    svg.append("text").attr("class",styles.depthquadrant).attr("x", width*3/4 ).attr("y",  height*3/4 ).style("text-anchor", "middle").text(titles.broad)
    svg.append("text").attr("class",styles.axistitle).attr("x", width/2 ).attr("y",  height+35 ).style("text-anchor", "middle").text(titles.x)
    svg.append("text").attr("class",styles.axistitle).attr("transform", "rotate(-90)").attr("x",0 - (height / 2)).attr("y", 0 - margin.left).attr("dy", "1.2em").style("text-anchor", "middle").text(titles.y)
    svg.selectAll(".dot").data(dataset).enter().append("circle").attr("class", styles.depthdot)
      .attr("cx", function(d) { return xScale(d.d) }).attr("cy", function(d) { return yScale(d.v) }).attr("r", 5)
      .on("mouseover", function () {
        d3.select(this).transition().duration('100').attr("r", 7)
        tip.transition().duration(200).style("opacity", .9)
        tip.html('<h3>Classification: '+data[4].charAt(0).toUpperCase() + data[4].slice(1)+ '</h3>Breadth: '+data[2]+' Depth: '+data[3]+'<br />Unique Players: '+data[1].toLocaleString()+'<br />Total Ranked Games: '+data[0].toLocaleString()+'<br/> 7 Days, All Ranks, All Regions')
          .style("left", (this.getBoundingClientRect().left-chart.current.getBoundingClientRect().left + 6 ) + "px")
          .style("top", (this.getBoundingClientRect().top-chart.current.getBoundingClientRect().top - 220 ) + "px")
        })
      .on("mouseout", function () {
        d3.select(this).transition().duration('100').attr("r", 5)
        tip.transition().duration(500).style("opacity", 0)
      })

  },[data,titles,show])
  if (typeof data === 'undefined') return <></>
  return (
    <div className={styles.depth}>
      <div ref={chart}></div>
      <div ref={graphtip} className={styles.depthtip}></div>
    </div>
  )
}

export default SimpleGraph
