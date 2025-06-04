import type { ReactElement } from "react";
import styles from "./TranslateWrapper.module.css";

interface ITranslateWrapper {
  theme: string;
  children: ReactElement;
}

function TranslateWrapper({ children, theme }: ITranslateWrapper) {
  return (
    <div className={`${styles.container} ${styles[theme]}`}>{children}</div>
  );
}

export default TranslateWrapper;
