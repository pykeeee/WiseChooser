import Elo from "./Elo";
import styles from "./TierIcon.module.css";

const tiers = {
  challenger: ["challenger", "CHALLENGER"],
  grandmaster: ["grandmaster", "G.MASTER"],
  master_plus: ["master", "MASTER+"],
  master: ["master", "MASTER"],
  diamond_plus: ["diamond", "DIAMOND+"],
  diamond: ["diamond", "DIAMOND"],
  emerald_plus: ["emerald", "EMERALD+"],
  emerald: ["emerald", "EMERALD"],
  platinum_plus: ["platinum", "PLATINUM+"],
  platinum: ["platinum", "PLATINUM"],
  gold_plus: ["gold", "GOLD+"],
  gold: ["gold", "GOLD"],
  silver: ["silver", "SILVER"],
  bronze: ["bronze", "BRONZE"],
  iron: ["iron", "IRON"],
  all: ["all", "ALL RANKS"],
  unranked: ["unranked", "UNRANKED"],
  "1trick": ["1trick", "1TRICK"],
  d2_plus: ["diamond", "D2+"],
};

export const TierIcon = ({ tier, clickHandler }) => {
  if (!tier) return "";
  return (
    <div className={styles.tiericon} onClick={(e) => clickHandler()}>
      <Elo tier={tiers[tier][0]} />
      <div>{tiers[tier][1]}</div>
    </div>
  );
};

export default TierIcon;
