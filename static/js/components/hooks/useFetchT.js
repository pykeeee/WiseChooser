import { useState, useEffect } from "react";

export const useFetchT = (url, l, id = "", key, s, l2) => {
  key = l + id + "_" + key;
  const r = (s) => s.split("").reverse().join("");
  let URL;
  if (url && s)
    URL =
      url +
      r(l2) +
      "/" +
      r(
        (id.split("_")[1] * 1247 - 22).toString().substr(0, 4) +
          "0" +
          (id.split("_")[1] * 15 + 3).toString()
      ) +
      ".txt";
  if (url && !s) URL = url;
  const [data, setData] = useState({ [key]: false });
  useEffect(() => {
    let active = URL ? true : false;
    const fetchData = async () => {
      const response = active ? await fetch(URL) : false;
      const j = active ? await response.text() : false;
      if (active && j) {
        if (s) {
          let data2 = "";
          for (let x = j.length - 1; x >= 0; x--) {
            if (j[x] === j[x].toUpperCase()) data2 += j[x].toLowerCase();
            else if (j[x] === j[x].toLowerCase()) data2 += j[x].toUpperCase();
            else data2 += j[x];
          }
          setData({ [key]: JSON.parse(atob(data2)) });
        } else {
          setData({ [key]: JSON.parse(j) });
        }
      }
    };
    if (URL) fetchData();
    return () => (active = false);
  }, [URL, l, key, s]);
  return data;
};
export default useFetchT;
