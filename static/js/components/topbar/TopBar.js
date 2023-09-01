import Discord from "../icons/DiscordIcon";
// import { Link} from 'react-router-dom'
import LanguageDropDown from "./LanguageDropDown";
import Menu from "../menu/Menu";
import Search from "./Search";
import SearchBar from "./SearchBar";
import Trans from "../misc/Trans";
import TierListIcon from "../icons/TierListIcon";
import TierListLink from "../links/TierListLink";
import useSearchParams from "../hooks/useSearchParams";
import useWidth from "../hooks/useWidth";
import Wrapper from "../misc/Wrapper";
import styles from "./TopBar.module.css";

const TopBar = () => {
  const { mode, patch, tier, region } = useSearchParams();
  const nav = { mode: mode, patch: patch, tier: tier, region: region };
  const view =
    ["grid", "tier", "list", "delta"].indexOf(
      localStorage.getItem("tierList")
    ) !== -1
      ? localStorage.getItem("tierList")
      : false;
  const w = useWidth();
  const width = w.size;
  const menu = w.menu;
  return (
    <div className={styles.topbar}>
      <Wrapper width={width}>
        <div className={styles[menu === "none" ? "showtoggle" : "hidetoggle"]}>
          <Menu menu={menu} />
          <div className={styles[width]}>
            <div>
              <a href="/">
                <div className={styles.logo}>
                  <img
                    src="https://cdn5.lolalytics.com/logo/lolalytics35.webp"
                    srcSet="https://cdn5.lolalytics.com/logo/lolalytics35.webp 106w,
                            https://cdn5.lolalytics.com/logo/lolalytics70.webp 212w"
                    width="106"
                    height="35"
                    alt="LoLalytics"
                  />
                </div>
              </a>
            </div>
            <div className={styles.icon}>
              <TierListLink nav={nav} view={view}>
                <TierListIcon />
                <div>
                  <Trans
                    trans="menu::main::tierlist"
                    english="Tier&nbsp;List"
                  />
                </div>
              </TierListLink>
            </div>
            {width !== "tiny" && (
              <div className={styles.icon}>
                <a href="https://discord.gg/zKyaZ6w">
                  <Discord />
                  <div>Discord</div>
                </a>
              </div>
            )}
            {width !== "tiny" && (
              <div className={styles.lang}>
                <LanguageDropDown />
              </div>
            )}
            {width !== "tiny" && <SearchBar nav={nav} />}
            {width === "tiny" && <Search nav={nav} />}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default TopBar;
