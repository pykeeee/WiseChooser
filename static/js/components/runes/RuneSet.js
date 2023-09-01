import Rune from "../images/Rune";
import styles from "./RuneSet.module.css";

const RuneSet = ({ rp = false, runePage, active, primary }) => {
  const structure = [
    [
      [8005, 8008, 8021, 8010],
      [9101, 9111, 8009],
      [9104, 9105, 9103],
      [8014, 8017, 8299],
    ],
    [
      [8112, 8124, 8128, 9923],
      [8126, 8139, 8143],
      [8136, 8120, 8138],
      [8135, 8134, 8105, 8106],
    ],
    [
      [8214, 8229, 8230],
      [8224, 8226, 8275],
      [8210, 8234, 8233],
      [8237, 8232, 8236],
    ],
    [
      [8437, 8439, 8465],
      [8446, 8463, 8401],
      [8429, 8444, 8473],
      [8451, 8453, 8242],
    ],
    [
      [8351, 8360, 8369],
      [8306, 8304, 8313],
      [8321, 8316, 8345],
      [8347, 8410, 8352],
    ],
    [
      [5008, 5005, 5007],
      [5008, 5002, 5003],
      [5001, 5002, 5003],
    ],
  ];
  const runePages = { 8000: 0, 8100: 1, 8200: 2, 8300: 4, 8400: 3, statMod: 5 };
  if (rp === false) rp = runePages[runePage];
  let runes = primary || rp === 5 ? structure[rp] : structure[rp].slice(1, 4);
  let filter;
  return (
    <div className={styles[rp === 5 ? "mod" : "rune"]}>
      {active.length > 1 &&
        runes.map((row, j) => (
          <div key={j}>
            {row.map((rune, i) => {
              if (rp === 5) filter = active[j] === rune ? false : true;
              else filter = active.indexOf(rune) !== -1 ? false : true;
              return (
                <Rune
                  key={i}
                  rune={rune}
                  size={primary && !j ? 30 : 24}
                  keyStone={primary && !j ? true : false}
                  filter={filter}
                  flex={rp === 5 && j === 1 ? "f" : ""}
                />
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default RuneSet;
