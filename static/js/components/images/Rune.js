import { useContext } from "react";
import { TipContext } from "../../containers/TipContext";
import ChampionLink from "../links/ChampionLink";
import RuneImage from "./RuneImage";
import Tippy from "@tippyjs/react";
import styles from "./Rune.module.css";

const Rune = ({
  rune,
  size = 30,
  keyStone = false,
  filter,
  flex = "",
  type = "",
  nav,
}) => {
  const tips = useContext(TipContext);
  const tip =
    tips.rune && tips.rune[rune + flex] ? tips.rune[rune + flex] : "Loading...";

  if (type === "link" && keyStone)
    return (
      <ChampionLink cid={nav.cid} lane={nav.lane} keystone={rune} nav={nav}>
        <Tippy
          content={
            <div
              className={
                tips.rune && tips.rune[rune + flex] ? "" : styles.loading
              }
              dangerouslySetInnerHTML={{ __html: tip }}
            />
          }
          onShow={() => {
            if (!tips.showRune) tips.setShowRune(true);
          }}
        >
          <div>
            <RuneImage rune={rune} size={size} filter={filter} />
          </div>
        </Tippy>
      </ChampionLink>
    );

  return (
    <Tippy
      content={
        <div
          className={tips.rune && tips.rune[rune + flex] ? "" : styles.loading}
          dangerouslySetInnerHTML={{ __html: tip }}
        />
      }
      onShow={() => {
        if (!tips.showRune) tips.setShowRune(true);
      }}
    >
      <div>
        <RuneImage rune={rune} size={size} filter={filter} />
      </div>
    </Tippy>
  );
};

export default Rune;
