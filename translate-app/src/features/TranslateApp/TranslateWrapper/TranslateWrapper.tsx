import type { ReactElement } from "react";
import styles from "./TranslateWrapper.module.css";
import IconButton from "../../../components/IconButton/IconButton";
import Button from "../../../components/Button/Button";

interface ITranslateWrapper {
  theme: string;
  queryLength?: number;
  isTranslateBox?: boolean;
  isDisabled: boolean;
  tabs: ReactElement;
  children: ReactElement;
  onClickTranslate?: () => void;
  onSwapLanguages?: () => void;
}

function TranslateWrapper({
  children,
  tabs,
  theme,
  isDisabled,
  isTranslateBox = true,
  onClickTranslate,
  queryLength,
  onSwapLanguages,
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
            onClick={() => {
              if (onSwapLanguages) onSwapLanguages();
            }}
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
          {isTranslateBox && (
            <p className={styles.wordCounter}>{queryLength}/500</p>
          )}
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
