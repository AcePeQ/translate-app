import { useMutation } from "@tanstack/react-query";
import { translateTextApi } from "../../services/translateApi";

export interface ITranslateOptions {
  translateFromLanguage: string;
  translateFromText: string;
  translateToLanguage: string;
  translateToText: string;
}

export function useTranslateText() {
  const { mutate: translateText, isPending: isTranslating } = useMutation({
    mutationFn: (translateOptions: ITranslateOptions) =>
      translateTextApi(translateOptions),
    onSuccess: () => {},
    onError: () => {},
  });

  return { translateText, isTranslating };
}
