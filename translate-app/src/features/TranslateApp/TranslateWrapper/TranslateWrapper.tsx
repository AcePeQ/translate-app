import type { ReactElement } from "react";
import styles from "./TranslateWrapper.module.css";
import IconButton from "../../../components/IconButton/IconButton";
import Button from "../../../components/Button/Button";

interface ITranslateWrapper {
  theme: string;
  children: ReactElement;
  isTranslateBox?: boolean;
  tabs: ReactElement;
  isDisabled: boolean;
  onClickTranslate?: () => void;
}

function TranslateWrapper({
  children,
  tabs,
  theme,
  isDisabled,
  isTranslateBox = true,
  onClickTranslate,
}: ITranslateWrapper) {
  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.tabsHeader}>
        <menu>{tabs}</menu>
        {!isTranslateBox && (
          <IconButton
            isDisabled={isDisabled}
            label="switch language transition"
            icon="Horizontal_top_left_main.svg"
            onClick={() => {}}
          />
        )}
      </div>
      {children}
      <div className={styles.wrapperFooter}>
        <div className={styles.buttonContainer}>
          <IconButton
            isDisabled={isDisabled}
            label="speach voice"
            icon="sound_max_fill.svg"
            onClick={() => {}}
          />
          <IconButton
            isDisabled={isDisabled}
            label="copy to clipboard"
            icon="Copy.svg"
            onClick={() => {}}
          />
          {isTranslateBox && <p className={styles.wordCounter}>0/500</p>}
        </div>
        {isTranslateBox && (
          <Button
            isDisabled={isDisabled}
            onClick={onClickTranslate}
            isIconTranslate={true}
          >
            Translate
          </Button>
        )}
      </div>
    </div>
  );
}

export default TranslateWrapper;
