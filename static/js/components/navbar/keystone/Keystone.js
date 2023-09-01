import ChampionLink from "../../links/ChampionLink";
import Rune from "../../images/Rune";
import styles from "./Keystone.module.css";

export const Keystone = ({ nav }) => {
  if (!nav.keystone) return "";
  return (
    <div className={styles.keystone}>
      <ChampionLink cid={nav.cid} lane={nav.lane} nav={nav}>
        <div className={styles.inner}>
          <Rune rune={nav.keystone} size={34} keyStone={true} nav={nav} />
        </div>
      </ChampionLink>
      <div className={styles.clear}>X</div>
    </div>
  );
};

export default Keystone;
