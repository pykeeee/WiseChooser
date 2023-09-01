import styles from "./LaneIcon.module.css";

export const LaneIcon = ({ lane = "default" }) => {
  const size = 27;
  const sizeX = lane === "support" ? (37 / 30) * size : size;
  const laneName = (lane === "default" ? "all" : lane).toLowerCase();
  return (
    <img
      className={styles.lane}
      width={sizeX}
      height={size}
      src={`https://cdn5.lolalytics.com/lane${size}/${laneName}.webp`}
      srcSet={`https://cdn5.lolalytics.com/lane${size}/${laneName}.webp ${size}w,
                 https://cdn5.lolalytics.com/lane${size * 2}/${laneName}.webp ${
        size * 2
      }w`}
      alt={lane}
    />
  );
};

export default LaneIcon;
