import React, { useState, useEffect } from "react";
import useFetchT from "../components/hooks/useFetchT";

export const TipContext = React.createContext(null);

const langPaths = {
  eng: "en",
  chn: "zh",
  cze: "cs",
  deu: "de",
  esp: "es",
  fra: "fr",
  grc: "el",
  hun: "hu",
  ita: "it",
  jpn: "ja",
  kor: "ko",
  pol: "pl",
  por: "pt",
  rom: "ro",
  rus: "ru",
  tha: "th",
  tur: "tr",
  vnm: "vi",
};

export const TipContextProvider = ({ children }) => {
  const [champ, setChamp] = useState(false);
  const [showChamp, setShowChamp] = useState(false);
  const [lang, setLang] = useState(false);
  const [item, setItem] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const [rune, setRune] = useState(false);
  const [showRune, setShowRune] = useState(false);
  const [skill, setSkill] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  const [spell, setSpell] = useState(false);
  const [showSpell, setShowSpell] = useState(false);
  const [tips, setTips] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const params = new URLSearchParams(window.location.search);
  let language =
    typeof langPaths[params.get("lang")] !== "undefined"
      ? params.get("lang")
      : null;
  if (language === null) {
    language = localStorage.getItem("language");
    if (language === null) {
      localStorage.setItem("language", "eng");
      language = "eng";
    }
  }
  if (lang !== language) {
    setLang(language);
  }

  useEffect(() => {
    setChamp(false);
    setShowChamp(false);
    setItem(false);
    setShowItem(false);
    setRune(false);
    setShowRune(false);
    setSkill(false);
    setShowSkill(false);
    setSpell(false);
    setShowSpell(false);
  }, [lang]);

  const URLS = {
    champ: `https://cdn7.lolalytics.com/t/c/${langPaths[lang]}.json`,
    item: `https://cdn7.lolalytics.com/t/i/${langPaths[lang]}.json`,
    rune: `https://cdn7.lolalytics.com/t/r/${langPaths[lang]}.json`,
    spell: `https://cdn7.lolalytics.com/t/ss/${langPaths[lang]}.json`,
    skill: `https://cdn7.lolalytics.com/t/s/`,
    tips: "https://cdn7.lolalytics.com/t/tt/tt.json",
  };

  let type = "tip";
  let id = "";
  let extra = false;
  if (showChamp && !champ) type = "champ";
  else if (showItem && !item) type = "item";
  else if (showRune && !rune) type = "rune";
  else if (showSkill && !skill[showSkill]) {
    type = "skill";
    extra = true;
    id = lang + "_" + showSkill;
  } else if (showSpell && !spell) type = "spell";
  else if (showTips && !tips) type = "tips";
  const data = useFetchT(URLS[type], lang, id, type, extra, langPaths[lang])[
    lang + id + "_" + type
  ];

  useEffect(() => {
    if (type === "champ") setChamp(data);
    else if (type === "item") setItem(data);
    else if (type === "rune") setRune(data);
    else if (type === "skill" && data) {
      setSkill({ ...skill, [showSkill]: data });
      setShowSkill(false);
    } else if (type === "spell") setSpell(data);
    else if (type === "tips") setTips(data);
  }, [type, data, id, skill, showSkill]);

  const contextValue = {
    lang,
    setLang,
    champ,
    showChamp,
    setShowChamp,
    item,
    showItem,
    setShowItem,
    rune,
    showRune,
    setShowRune,
    skill,
    showSkill,
    setShowSkill,
    spell,
    showSpell,
    setShowSpell,
    tips,
    showTips,
    setShowTips,
  };

  return (
    <TipContext.Provider value={contextValue}>{children}</TipContext.Provider>
  );
};
