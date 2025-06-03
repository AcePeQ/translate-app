import { useState } from "react";
import TabButton from "../../../components/TabButton/TabButton";
import TranslateWrapper from "../TranslateWrapper/TranslateWrapper";
import { useTranslateText } from "../useTranslateText";

const LANGUAGE_TABS = [
  { languageName: "English", languageISO: "en" },
  { languageName: "French", languageISO: "fr" },
];

const INITIAL_TRANSTLATE_OPTIONS = {
  translateFromLanguage: "en",
  translateFromText: "Hello, how are you?",
  translateToLanguage: "fr",
  translateToText: "Bonjour, comment allez-vous?",
};

function Translate() {
  const { translateText, isTranslating } = useTranslateText();

  const [translateOptions, setTranslateOptions] = useState({
    ...INITIAL_TRANSTLATE_OPTIONS,
  });

  function handleChangeTranslatedText(newText: string) {
    setTranslateOptions((prevOptions) => {
      return {
        ...prevOptions,
        translateToText: newText,
      };
    });
  }

  function handleTranslateText() {
    translateText(translateOptions);
  }

  function handleChangeLanguage(property: string, newLanguage: string) {
    setTranslateOptions((prevOptions) => {
      return {
        ...prevOptions,
        [property]: newLanguage,
      };
    });
  }

  return (
    <>
      <TranslateWrapper
        onClickTranslate={handleTranslateText}
        isDisabled={isTranslating}
        tabs={
          <>
            {LANGUAGE_TABS.map((tab) => (
              <li key={tab.languageISO}>
                <TabButton
                  isDisabled={isTranslating}
                  isActive={
                    tab.languageISO === translateOptions.translateFromLanguage
                  }
                  onClick={() =>
                    handleChangeLanguage(
                      "translateFromLanguage",
                      tab.languageISO
                    )
                  }
                >
                  {tab.languageName}
                </TabButton>
              </li>
            ))}
          </>
        }
        theme="light"
      >
        <textarea
          disabled={isTranslating}
          value={translateOptions.translateFromText}
          onChange={(e) => handleChangeTranslatedText(e.target.value)}
        ></textarea>
      </TranslateWrapper>

      <TranslateWrapper
        isDisabled={isTranslating}
        theme="dark"
        tabs={
          <>
            {LANGUAGE_TABS.map((tab) => (
              <li key={tab.languageISO}>
                <TabButton
                  isDisabled={isTranslating}
                  isActive={
                    tab.languageISO === translateOptions.translateToLanguage
                  }
                  onClick={() =>
                    handleChangeLanguage("translateToLanguage", tab.languageISO)
                  }
                >
                  {tab.languageName}
                </TabButton>
              </li>
            ))}
          </>
        }
        isTranslateBox={false}
      >
        <textarea
          disabled={true}
          value={translateOptions.translateToText}
        ></textarea>
      </TranslateWrapper>
    </>
  );
}

export default Translate;
