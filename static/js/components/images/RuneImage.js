import styles from "./RuneImage.module.css";

const RuneImage = ({ rune, size = 30, filter }) => {
  return (
    <>
      {rune > 5008 && (
        <img
          width={size}
          height={size}
          className={`${filter ? styles.grey : ""}`}
          src={`https://cdn5.lolalytics.com/rune34/${rune}.webp`}
          srcSet={`https://cdn5.lolalytics.com/rune34/${rune}.webp 34w,
                   https://cdn5.lolalytics.com/rune68/${rune}.webp 68w`}
          alt={rune}
        />
      )}
      {rune < 5009 && (
        <img
          width={size}
          height={size}
          className={`${filter ? styles.grey : ""}`}
          src={`https://cdn5.lolalytics.com/statmod32/${rune}.webp`}
          alt={rune}
        />
      )}
    </>
  );
};

export default RuneImage;
