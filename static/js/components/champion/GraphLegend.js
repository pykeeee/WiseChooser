import PropTypes from "prop-types";
import styles from "./GraphLegend.module.css";

export const GraphLegend = ({ tiers, handleClick, width }) => {
  const legendTitles = {
    all: "Overall",
    diamond_plus: "Diamond+",
    emerald: "Emerald",
    platinum: "Platinum",
    gold: "Gold",
    silver: "Silver",
    bronze: "Bronze",
    iron: "Iron",
    max: "Max Days",
    fortnight: "14 Days",
    week: "7 Days",
    today: "Today",
    smooth: "Smooth",
  };
  const clickLegend = (e) => handleClick(e);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>LEGEND:</div>
      <div className={styles.legend}>
        {Object.keys(legendTitles).map((tier, i) => (
          <div
            key={i}
            className={tiers[tier] ? styles[tier] : styles.greyfilter}
            data-id={tier}
            data-id2={i}
            onClick={clickLegend}
          >
            {legendTitles[tier]}
          </div>
        ))}
      </div>
    </div>
  );
};

GraphLegend.propTypes = {
  tiers: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default GraphLegend;
