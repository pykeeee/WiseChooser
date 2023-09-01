import { useContext } from "react";
import { TipContext } from "../../containers/TipContext";
import ChampionName from "../misc/ChampionName";
import { champName, champPath } from "../misc/Static";
import styles from "./Champ.module.css";
import Tippy from "@tippyjs/react";

const paths = {
  champ28b: ["champx", 30],
  champ30b: ["champx", 30],
  champ32b: ["champx", 30],
  champ37br: ["champx", 46],
  champ48br: ["champx", 46],
  champ50b: ["champx", 46],
  champ80: ["champ", 140],
  champ100h: ["champ", 140],
  champ100c: ["champ", 140],
  champ140c: ["champ", 140],
  champ116: ["champ", 140],
};

const Champ = ({ id, type, data = false, toolTip = true }) => {
  const tips = useContext(TipContext);
  let tip;

  if (tips.champ && tips.champ[id]) {
    if (data.type === "counter") {
      tip = (
        <div className={styles.tip}>
          <div className={styles.header}>
            <div>
              <Champ
                id={data.cid}
                type="champ48br"
                settings={{ type: "none" }}
              />
            </div>
            <div className={styles.type}>vs</div>
            <div>
              <Champ id={id} type="champ48br" settings={{ type: "none" }} />
            </div>
            <div
              class={styles.champname}
              dangerouslySetInnerHTML={{ __html: tips.champ[id] }}
            />
          </div>
          <ChampionName cid={data.cid} /> wins against <ChampionName cid={id} />{" "}
          {data.wr}% of the time which is {Math.abs(data.d1)}%{" "}
          {data.d1 >= 0 ? "higher" : "lower"} against <ChampionName cid={id} />{" "}
          than the average opponent.
          <br />
          <br />
          After normalising both champions win rates{" "}
          <ChampionName cid={data.cid} /> wins against <ChampionName cid={id} />{" "}
          {Math.abs(data.d2)}% {data.d2 >= 0 ? "more" : "less"} often than would
          be expected.
        </div>
      );
    } else if (data.type === "synergy") {
      tip = (
        <div className={styles.tip}>
          <div className={styles.header}>
            <div>
              <Champ
                id={data.cid}
                type="champ48br"
                settings={{ type: "none" }}
              />
            </div>
            <div className={styles.type}>+</div>
            <div>
              <Champ id={id} type="champ48br" settings={{ type: "none" }} />
            </div>
            <div
              className={styles.champname}
              dangerouslySetInnerHTML={{ __html: tips.champ[id] }}
            />
          </div>
          <ChampionName cid={data.cid} /> wins {data.wr}% of the time with{" "}
          <ChampionName cid={id} /> which is {Math.abs(data.d1)}%{" "}
          {data.d1 >= 0 ? "more" : "less"} than <ChampionName cid={data.cid} />{" "}
          and <ChampionName cid={id} />
          's combined average win rate.
        </div>
      );
    } else {
      tip = <div dangerouslySetInnerHTML={{ __html: tips.champ[id] }} />;
    }
  } else tip = <div className={styles.loading}>Loading...</div>;
  const name = champPath(id);
  if (!toolTip)
    return (
      <img
        className={styles[type]}
        src={`https://cdn5.lolalytics.com/${paths[type][0]}${paths[type][1]}/${name}.webp`}
        srcSet={`https://cdn5.lolalytics.com/${paths[type][0]}${
          paths[type][1]
        }/${name}.webp ${paths[type][1]}w,
       https://cdn5.lolalytics.com/${paths[type][0]}${
          paths[type][1] * 2
        }/${name}.webp ${paths[type][1] * 2}w`}
        alt={champName(id)}
      />
    );
  return (
    <Tippy
      content={tip}
      onShow={() => {
        if (!tips.showChamp) tips.setShowChamp(true);
      }}
    >
      <img
        className={styles[type]}
        src={`https://cdn5.lolalytics.com/${paths[type][0]}${paths[type][1]}/${name}.webp`}
        srcSet={`https://cdn5.lolalytics.com/${paths[type][0]}${
          paths[type][1]
        }/${name}.webp ${paths[type][1]}w,
       https://cdn5.lolalytics.com/${paths[type][0]}${
          paths[type][1] * 2
        }/${name}.webp ${paths[type][1] * 2}w`}
        alt={champName(id)}
        data-id={id}
      />
    </Tippy>
  );
};

export default Champ;
