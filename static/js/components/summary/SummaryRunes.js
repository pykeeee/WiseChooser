import RuneSet from "../runes/RuneSet";
import SummaryHeading from "./SummaryHeading";
import SummaryWinRate from "./SummaryWinRate";
import styles from "./SummaryRunes.module.css";

export const SummaryRunes = ({ runes }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <SummaryHeading
          heading={{
            trans: "runes::primaryrunes",
            english: "Primary Runes",
            tip: "",
          }}
        />
        <div className={styles.runes1}>
          <RuneSet rp={runes.page.pri} active={runes.set.pri} primary={true} />
        </div>
      </div>
      <div>
        <SummaryHeading
          heading={{ trans: "runes::secondary", english: "Secondary", tip: "" }}
        />
        <div className={styles.runes}>
          <RuneSet rp={runes.page.sec} active={runes.set.sec} primary={false} />
        </div>
        <SummaryWinRate wr={runes.wr} games={runes.n} tip="quickrunes" />
      </div>
      <div>
        <SummaryHeading
          heading={{ trans: "runes::statmods", english: "Stat Mods", tip: "" }}
        />
        <div className={styles.runes}>
          <RuneSet rp={5} active={runes.set.mod} primary={false} />
        </div>
      </div>
    </div>
  );
};

export default SummaryRunes;
