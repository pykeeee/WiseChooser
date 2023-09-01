import Rune from "../images/Rune";
import WinRate from "../misc/WinRate";
import styles from "./RuneCell.module.css";

export const RuneCell = ({ nav, page, summary, data, type, rune, runeRow }) => {
  let isActive = page === 0 ? true : false;
  let flex = "";
  if (type === "mod") {
    if (page === 1 && summary && summary.win.set.mod[runeRow] === rune)
      isActive = true;
    if (page === 2 && summary && summary.pick.set.mod[runeRow] === rune)
      isActive = true;
    if (runeRow === 1) flex = "f";
  } else {
    if (page === 1 && summary && summary.win.set[type].indexOf(rune) !== -1)
      isActive = true;
    if (page === 2 && summary && summary.pick.set[type].indexOf(rune) !== -1)
      isActive = true;
  }
  const offset = type === "sec" ? 1 : 0;
  return (
    <div className={styles[isActive ? "runecell" : "runecellgrey"]}>
      <Rune
        rune={rune}
        size={type === "pri" && !runeRow ? 33 : 30}
        keyStone={type === "pri" && !runeRow}
        flex={flex}
        type="link"
        nav={nav}
      />
      {data.stats[rune + flex][offset][2] > 0 && (
        <>
          <WinRate wr={data.stats[rune + flex][offset][1].toFixed(1)} />
          <div className={styles.pick}>
            {data.stats[rune + flex][offset][0].toFixed(1)}
          </div>
          <div className={styles.games}>
            {data.stats[rune + flex][offset][2].toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
};

export default RuneCell;
