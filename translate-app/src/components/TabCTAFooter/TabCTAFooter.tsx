import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";

import styles from "./TabCTAFooter.module.css";

interface ITabCTAFooter {
  isDisabled: boolean;
  queryLength?: number;
  onClickTranslate?: () => void;
  onTextToSpeach: () => void;
  onCopyToClipboard: () => void;
}

function TabCTAFooter({
  isDisabled,
  onClickTranslate,
  queryLength,
  onCopyToClipboard,
}: ITabCTAFooter) {
  return (
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
          onClick={onCopyToClipboard}
        />
        {onClickTranslate && (
          <p className={styles.wordCounter}>{queryLength}/500</p>
        )}
      </div>
      {onClickTranslate && (
        <Button
          isDisabled={isDisabled}
          onClick={onClickTranslate}
          isIconTranslate={true}
        >
          Translate
        </Button>
      )}
    </div>
  );
}

export default TabCTAFooter;
