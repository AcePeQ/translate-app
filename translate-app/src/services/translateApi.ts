import type { ITranslateOptions } from "../features/TranslateApp/useTranslateText";

export async function translateTextApi(translateOptions: ITranslateOptions) {
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${translateOptions.translateFromText}&langpair=${translateOptions.translateFromLanguage}|${translateOptions.translateToLanguage}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(translateOptions);
    console.log(res);

    if (!res.ok) {
      throw new Error("Translate went wrong!");
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
