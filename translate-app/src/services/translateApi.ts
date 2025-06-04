import type { ITranslateOptions } from "../features/TranslateApp/useTranslateText";

export async function translateTextApi(translateOptions: ITranslateOptions) {
  try {
    const { translateFromText, translateFromLanguage, translateToLanguage } =
      translateOptions;

    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${translateFromText}&langpair=${
        translateFromLanguage === "auto" ? "de" : translateFromLanguage
      }|${translateToLanguage}`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      throw new Error("Translate went wrong!");
    }

    const data = await res.json();

    return data.responseData;
  } catch (error) {
    console.error(error);
  }
}
