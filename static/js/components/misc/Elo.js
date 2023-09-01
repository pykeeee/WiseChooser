import styles from "./Elo.module.css";

export const Elo = ({ tier = "unranked", division = "" }) => {
  if (tier === "") tier = "unranked";
  tier = tier.toLowerCase();
  if (
    tier === "challenger" ||
    tier === "grandmaster" ||
    tier === "master" ||
    tier === "unranked"
  )
    division = "";
  return (
    <div className={styles.elo}>
      <img
        src={`https://cdn5.lolalytics.com/emblem40/${tier.toLowerCase()}.webp`}
        srcSet={`https://cdn5.lolalytics.com/emblem80/${tier.toLowerCase()}.webp 40w,
                 https://cdn5.lolalytics.com/emblem80/${tier.toLowerCase()}.webp 80w`}
        width="40"
        height="40"
        alt={tier.toLowerCase()}
      />
      <div>{division.toUpperCase()}</div>
    </div>
  );
};

export default Elo;
