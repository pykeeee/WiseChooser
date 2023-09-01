import { useContext } from "react";
import { TipContext } from "../../containers/TipContext";
import styles from "./Spell.module.css";
import Tippy from "@tippyjs/react";

const alt = {
  21: "Barrier",
  13: "Clarity",
  1: "Cleanse",
  3: "Exhaust",
  4: "Flash",
  6: "Ghost",
  7: "Heal",
  14: "Ignite",
  32: "Mark",
  31: "Poro Toss",
  11: "Smite",
  12: "Teleport",
  30: "To the King!",
  54: "Placeholder",
  55: "Placeholder and Attack-Smite",
};

const Spell = ({ id, type }) => {
  const tips = useContext(TipContext);
  const tip = tips.spell && tips.spell[id] ? tips.spell[id] : "Loading...";
  return (
    <Tippy
      content={
        <div
          className={tips.spell && tips.spell[id] ? "" : styles.loading}
          dangerouslySetInnerHTML={{ __html: tip }}
        />
      }
      onShow={() => {
        if (!tips.showSpell) tips.setShowSpell(true);
      }}
    >
      <img
        className={styles[type]}
        src={`https://cdn5.lolalytics.com/spell64/${id}.webp`}
        alt={alt[id]}
      />
    </Tippy>
  );
};

export default Spell;
