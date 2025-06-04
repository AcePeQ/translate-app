import { useState } from "react";
import TabButton from "../../../components/TabButton/TabButton";
import TranslateWrapper from "../TranslateWrapper/TranslateWrapper";
import { useTranslateText } from "../useTranslateText";
import Tabs from "../../../components/Tabs/Tabs";
import TabCTAFooter from "../../../components/TabCTAFooter/TabCTAFooter";

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

function handleCopyToClipBoard(stringToCopy: string) {
  navigator.clipboard.writeText(stringToCopy);
}

function Translate() {
  const { translateText, isTranslating } = useTranslateText();

  const [translateOptions, setTranslateOptions] = useState({
    ...INITIAL_TRANSTLATE_OPTIONS,
  });

  function handleChangeTranslatedText(newText: string) {
    setTranslateOptions((prevOptions) => {
      return {
        ...prevOptions,
        translateFromText: newText,
      };
    });
  }

  function handleTranslateText() {
    translateText(translateOptions, {
      onSuccess: (data) => {
        setTranslateOptions((prevOptions) => {
          return {
            ...prevOptions,
            translateToText: data.translatedText,
          };
        });
      },
    });
  }

  function handleChangeLanguage(property: string, newLanguage: string) {
    setTranslateOptions((prevOptions) => {
      return {
        ...prevOptions,
        [property]: newLanguage,
      };
    });
  }

  function handleSwapLanguages() {
    setTranslateOptions((prevOptions) => {
      const newOptions = {
        translateFromLanguage: prevOptions.translateToLanguage,
        translateToLanguage: prevOptions.translateFromLanguage,
        translateFromText: prevOptions.translateToText,
        translateToText: prevOptions.translateFromText,
      };

      return newOptions;
    });
  }

  const queryLength = translateOptions.translateFromText.length;

  return (
    <>
      <TranslateWrapper theme="light">
        <>
          <Tabs isDisabled={isTranslating}>
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
          </Tabs>
          <textarea
            maxLength={500}
            disabled={isTranslating}
            value={translateOptions.translateFromText}
            onChange={(e) => handleChangeTranslatedText(e.target.value)}
          ></textarea>
          <TabCTAFooter
            isDisabled={isTranslating}
            onClickTranslate={handleTranslateText}
            onCopyToClipboard={() =>
              handleCopyToClipBoard(translateOptions.translateFromText)
            }
            queryLength={queryLength}
          />
        </>
      </TranslateWrapper>

      <TranslateWrapper theme="dark">
        <>
          <Tabs
            isDisabled={isTranslating}
            onSwapLanguages={handleSwapLanguages}
          >
            <>
              {LANGUAGE_TABS.map((tab) => (
                <li key={tab.languageISO}>
                  <TabButton
                    isDisabled={isTranslating}
                    isActive={
                      tab.languageISO === translateOptions.translateToLanguage
                    }
                    onClick={() =>
                      handleChangeLanguage(
                        "translateToLanguage",
                        tab.languageISO
                      )
                    }
                  >
                    {tab.languageName}
                  </TabButton>
                </li>
              ))}
            </>
          </Tabs>
          <textarea
            disabled={true}
            value={translateOptions.translateToText}
          ></textarea>
          <TabCTAFooter
            isDisabled={isTranslating}
            onCopyToClipboard={() =>
              handleCopyToClipBoard(translateOptions.translateToText)
            }
          />
        </>
      </TranslateWrapper>
    </>
  );
}

export default Translate;
