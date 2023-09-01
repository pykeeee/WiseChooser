import { useState } from "react";
import GraphLegend from "./GraphLegend";
import Graph from "./Graph";
import * as d3 from "d3";
import styles from "./Graphs.module.css";

const tiers = [
  "iron",
  "bronze",
  "silver",
  "gold",
  "platinum",
  "emerald",
  "diamond_plus",
  "all",
];
export const Graphs = ({ data, lane, mode, bans, cid, region, width }) => {
  const graphTypes = bans
    ? ["win", "pick", "games", "ban"]
    : ["win", "pick", "games"];
  const [graphTiers, setGraphTiers] = useState({
    all: 0,
    diamond_plus: 1,
    emerald: 1,
    platinum: 1,
    gold: 1,
    silver: 1,
    bronze: 0,
    iron: 0,
    max: 1,
    week: 0,
    fortnight: 0,
    today: 0,
    smooth: 1,
  });
  const [graphTiers2, setGraphTiers2] = useState();
  const graphKey = mode + "_" + cid + "_" + lane + "_" + region;

  const handleGraphTiersClick = (e) => {
    let newTiers = graphTiers;
    const id = e.target.getAttribute("data-id");
    if (id === "max" || id === "week" || id === "fortnight") {
      newTiers.week = 0;
      newTiers.max = 0;
      newTiers.fortnight = 0;
    }
    newTiers[id] = newTiers[id] ? 0 : 1;
    setGraphTiers(newTiers);
    setGraphTiers2(JSON.stringify(newTiers));
  };
  if (!data) return <></>;
  const visibleTiers = tiers.filter((t) => graphTiers[t]);
  const parseTime = d3.timeParse("%Y-%m-%d");

  let orderedDates = [...data.dates];
  let dateOffset = 0;
  if (graphTiers.today === 0) orderedDates.pop();
  if (graphTiers.week === 1) {
    dateOffset = orderedDates.length - 7;
    orderedDates = orderedDates.slice(-7);
  }
  if (graphTiers.fortnight === 1) {
    dateOffset = orderedDates.length - 14;
    orderedDates = orderedDates.slice(-14);
  }

  let graphData = graphTypes.map((type) =>
    visibleTiers
      .filter((chartTiers) => graphTiers[chartTiers])
      .map((chartTier) =>
        orderedDates
          .map((date, i) => {
            const d = parseTime(date);
            if (type === "win" && graphTiers.smooth === 1)
              return { d: d, v: data.wrs[chartTier][i + dateOffset] };
            else if (type === "win")
              return { d: d, v: data.wr[chartTier][i + dateOffset] };
            else if (type === "pick")
              return { d: d, v: data.pr[chartTier][i + dateOffset] };
            else if (type === "games")
              return { d: d, v: data.n[chartTier][i + dateOffset] };
            else return { d: d, v: data.br[chartTier][i + dateOffset] };
          })
          .sort((a, b) => a.d - b.d)
      )
  );
  return (
    <>
      <GraphLegend
        tiers={graphTiers}
        handleClick={handleGraphTiersClick}
        width={width}
      />
      {orderedDates.length > 1 && (
        <div className={styles[width + (bans ? "4" : "3")]}>
          <Graph
            type="win"
            data={graphData[0]}
            visible={visibleTiers}
            graphKey={graphKey + graphTiers2}
            bans={bans}
            cid={cid}
            width={width}
          />
          <Graph
            type="pick"
            data={graphData[1]}
            visible={visibleTiers}
            graphKey={graphKey + graphTiers2}
            bans={bans}
            cid={cid}
            width={width}
          />
          <Graph
            type="games"
            data={graphData[2]}
            visible={visibleTiers}
            graphKey={graphKey + graphTiers2}
            bans={bans}
            cid={cid}
            width={width}
          />
          {bans && (
            <Graph
              type="ban"
              data={graphData[3]}
              visible={visibleTiers}
              graphKey={graphKey + graphTiers2}
              bans={bans}
              cid={cid}
              width={width}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Graphs;
