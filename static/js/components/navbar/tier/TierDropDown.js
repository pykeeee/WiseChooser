import React, { useState, useRef } from "react";
import NavLink from "../NavLink";
import TierIcon from "../../misc/TierIcon";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./TierDropDown.module.css";

const tiersList = [
  "all",
  "1trick",
  "challenger",
  "grandmaster",
  "master",
  "master_plus",
  "diamond",
  "d2_plus",
  "diamond_plus",
  "emerald",
  "emerald_plus",
  "platinum",
  "platinum_plus",
  "gold",
  "gold_plus",
  "silver",
  "bronze",
  "iron",
  "unranked",
];

const TierDropDown = ({ nav }) => {
  const [dropdown, setDropDown] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setDropDown(false));
  return (
    <div ref={ref}>
      <div className={styles.selected}>
        <TierIcon tier={nav.tier} clickHandler={() => setDropDown(!dropdown)} />
      </div>
      {dropdown && (
        <div className={styles.options}>
          {tiersList.map((t, i) => (
            <NavLink
              key={i}
              type="tiericon"
              nav={nav}
              tier={t}
              baseURL={nav.baseURL}
              activeTier={nav.tier}
            >
              <TierIcon tier={t} clickHandler={() => setDropDown(false)} />
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default TierDropDown;
