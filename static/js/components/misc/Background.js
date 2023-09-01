import { champPath } from "../misc/Static";
import styles from "./Background.module.css";

const Background = ({ cid = false, children, width = "xlarge" }) => {
  const url =
    cid === 0
      ? "https://cdn5.lolalytics.com/extrabg1200/front.webp"
      : `https://cdn5.lolalytics.com/champbg1215/${champPath(cid)}.webp`;
  let style = {};
  if (cid !== false) {
    if (width === "xlarge" || width === "large")
      style = {
        backgroundImage: `radial-gradient(650px at 50% -4.5%, rgba(17, 17, 17, 0.7) 0%, #111 80%, #111 100%), url(${url})`,
      };
    if (width === "medium")
      style = {
        backgroundImage: `radial-gradient(650px at 50% -4.5%, rgba(17, 17, 17, 0.7) 0%, #111 75%, #111 100%), url(${url})`,
      };
    if (width === "small" || width === "xsmall" || width === "tiny")
      style = {
        backgroundImage: `radial-gradient(550px at 50% -4.5%, rgba(17, 17, 17, 0.5) 0%, #111 55%, #111 65%), url(${url})`,
      };
  }
  return (
    <div className={styles.back} style={style}>
      {children}
    </div>
  );
};
export default Background;
