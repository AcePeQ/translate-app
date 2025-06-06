import { useState } from "react";
import TabButton from "../../../components/TabButton/TabButton";
import TranslateWrapper from "../TranslateWrapper/TranslateWrapper";
import { useTranslateText } from "../useTranslateText";
import Tabs from "../../../components/Tabs/Tabs";
import TabCTAFooter from "../../../components/TabCTAFooter/TabCTAFooter";

const TRANSLATE_TO_LANGUAGE_TABS = [
  { languageName: "English", languageISO: "en" },
  { languageName: "French", languageISO: "fr" },
  { languageName: "Polish", languageISO: "pl" },
  { languageName: "Spanish", languageISO: "es" },
];

const TRANSLATE_FROM_LANGUAGE_TABS = [
  { languageName: "Detect Language", languageISO: "auto" },
  ...TRANSLATE_TO_LANGUAGE_TABS,
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

function handleTextToSpeach(textToSpeach: string, language: string) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(textToSpeach);
  utterance.lang = language;

  synth.speak(utterance);
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
      const fromLang = prevOptions.translateFromLanguage || "en";

      const newOptions = {
        translateFromLanguage: prevOptions.translateToLanguage,
        translateToLanguage: fromLang,
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
              {TRANSLATE_FROM_LANGUAGE_TABS.map((tab) => (
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
            onTextToSpeach={() =>
              handleTextToSpeach(
                translateOptions.translateFromText,
                translateOptions.translateFromLanguage
              )
            }
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
              {TRANSLATE_TO_LANGUAGE_TABS.map((tab) => (
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
            onTextToSpeach={() =>
              handleTextToSpeach(
                translateOptions.translateToText,
                translateOptions.translateToLanguage
              )
            }
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
