import React, { useState } from "react";
import useFetch from "../components/hooks/useFetch";

export const LangContext = React.createContext(null);

const languageList = [
  "eng",
  "chn",
  "cze",
  "deu",
  "esp",
  "fra",
  "grc",
  "hun",
  "ita",
  "jpn",
  "kor",
  "pol",
  "por",
  "rom",
  "rus",
  "tha",
  "tur",
  "vnm",
];

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState(false);
  const params = new URLSearchParams(window.location.search);

  if (
    languageList.indexOf(params.get("lang")) !== -1 &&
    params.get("lang") !== localStorage.getItem("language")
  ) {
    localStorage.setItem("language", params.get("lang"));
  }
  if (!localStorage.getItem("language"))
    localStorage.setItem("language", "eng");

  const language = localStorage.getItem("language");

  if (lang !== language) setLang(language);
  const langURL =
    language !== "eng"
      ? "https://cdn5.lolalytics.com/translations/" + language + ".json"
      : false;
  const fetchTranslation = useFetch(langURL, "translation", 1000);
  const translation = language !== "eng" ? fetchTranslation : [];

  const contextValue = {
    lang,
    setLang,
    translation,
  };

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};
