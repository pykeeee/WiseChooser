import Depth from "./Depth";
import Objectives from "./Objectives";
import Resources from "./Resources";
import SideBarAds1 from "../ads/SideBarAds1";
import SideBarAds2 from "../ads/SideBarAds2";
import SimpleGraph from "./SimpleGraph";
import Stats from "./Stats";
import TopList from "./TopList";
import TopStats from "./TopStats";
// import Notice2 from "./Notice2";
import styles from "./ChampionSideBar.module.css";

const ChampionSideBar = ({ width, nav, cid, path, data }) => {
  return (
    <>
      {width !== "medium" && width !== "small" && width !== "xsmall" && (
        <div className={styles[width]}>
          {/* <Notice2 /> */}
          <SideBarAds1 width={width} />
          <Objectives data={data.objective} />
          <Depth width={width} data={data.depth} />
          <SimpleGraph
            width={width}
            type="wrlchart"
            time={data.time}
            timeWin={data.timeWin}
          />
          <SimpleGraph
            width={width}
            type="wrdistchart"
            time={data.time}
            timeWin={data.timeWin}
          />
          <SideBarAds2 width={width} />
          <TopStats cid={cid} stats={data.topStats} />
          {data.top && (
            <TopList
              cid={cid}
              top={data.top.slice(0, 12)}
              path={path}
              nav={nav}
            />
          )}
          <Resources cid={cid} />
          <Stats stats={data.stats} cid={cid} count={data.statsCount} />
        </div>
      )}
      {width === "medium" && (
        <div className={styles.triple}>
          <div>
            <TopStats cid={cid} stats={data.topStats} />
            {data.top && (
              <TopList
                cid={cid}
                top={data.top.slice(0, 12)}
                path={path}
                nav={nav}
              />
            )}
          </div>
          <div>
            <SimpleGraph
              width={width}
              type="wrlchart"
              time={data.time}
              timeWin={data.timeWin}
            />
            <SimpleGraph
              width={width}
              type="wrdistchart"
              time={data.time}
              timeWin={data.timeWin}
            />
            <Depth width={width} data={data.depth} />
            <Resources cid={cid} />
          </div>
          <div>
            <Objectives data={data.objective} />
            <Stats stats={data.stats} cid={cid} count={data.statsCount} />
          </div>
        </div>
      )}
      {(width === "small" || width === "xsmall") && (
        <div className={styles.double}>
          <div>
            <TopStats cid={cid} stats={data.topStats} />
            {data.top && (
              <TopList
                cid={cid}
                top={data.top.slice(0, 12)}
                path={path}
                nav={nav}
              />
            )}
            <Objectives data={data.objective} />
          </div>
          <div>
            <SimpleGraph
              width={width}
              type="wrlchart"
              time={data.time}
              timeWin={data.timeWin}
            />
            <SimpleGraph
              width={width}
              type="wrdistchart"
              time={data.time}
              timeWin={data.timeWin}
            />
            <Depth width={width} data={data.depth} />
            <Resources cid={cid} />
            <Stats stats={data.stats} cid={cid} count={data.statsCount} />
          </div>
        </div>
      )}
    </>
  );
};

export default ChampionSideBar;
