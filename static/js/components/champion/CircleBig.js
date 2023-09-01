import Champ from "../images/Champ";
import LaneIcon from "../misc/LaneIcon";
import styles from "./CircleBig.module.css";

const CircleBig = ({ cid = false, lane, tier, topList = false }) => {
  return (
    <div className={styles.wrapper}>
      {cid > 0 && <Champ id={cid} type="champ140c" toolTip={false} />}
      {topList && (
        <img
          className={styles.challenger}
          src={`https://cdn5.lolalytics.com/misc/challenger140.webp`}
          srcSet={`https://cdn5.lolalytics.com/misc/challenger140.webp 140w,
                   https://cdn5.lolalytics.com/misc/challenger280.webp 280w`}
          width={140}
          height={140}
          alt="challenger"
        />
      )}
      <svg className={styles.border}>
        <circle
          cx="72"
          cy="72"
          r="72"
          stroke="#333"
          strokeWidth="2"
          fill="#111"
        ></circle>
      </svg>
      {lane && (
        <>
          <div className={styles.lane}>
            <LaneIcon lane={lane} />
          </div>
          <svg className={styles.laneborder}>
            <circle
              cx="23"
              cy="23"
              r="23"
              stroke="#333"
              strokeWidth="1"
              fill="#111"
            ></circle>
          </svg>
        </>
      )}
      {tier && (
        <>
          <div className={styles.tier}>{tier}</div>
          <svg className={styles.tierborder}>
            <circle
              cx="23"
              cy="23"
              r="23"
              stroke="#333"
              strokeWidth="1"
              fill="#111"
            ></circle>
          </svg>
        </>
      )}
    </div>
  );
};

export default CircleBig;
