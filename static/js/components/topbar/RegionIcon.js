import styles from "./RegionIcon.module.css";

const langPaths = {
  eng: "en",
  chn: "zh",
  cze: "cs",
  deu: "de",
  esp: "es",
  fra: "fr",
  grc: "el",
  hun: "hu",
  ita: "it",
  jpn: "ja",
  kor: "ko",
  pol: "pl",
  por: "pt",
  rom: "ro",
  rus: "ru",
  tha: "th",
  tur: "tr",
  vnm: "vi",
};

const RegionIcon = ({ region }) => {
  return (
    <div className={styles.icon}>
      <img
        src={`https://cdn5.lolalytics.com/lang35/${langPaths[region]}.webp`}
        srcSet={`https://cdn5.lolalytics.com/lang35/${langPaths[region]}.webp 35w,
               https://cdn5.lolalytics.com/lang70/${langPaths[region]}.webp 70w`}
        width={35}
        height={35}
        alt={region}
      />
    </div>
  );
};

export default RegionIcon;
