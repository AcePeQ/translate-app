import type { ReactElement } from "react";
import IconButton from "../IconButton/IconButton";

import styles from "./Tabs.module.css";

interface ITabs {
  children: ReactElement;
  onSwapLanguages?: () => void;
  isDisabled: boolean;
}

function Tabs({ children, onSwapLanguages, isDisabled }: ITabs) {
  const hasSwapButton = onSwapLanguages ? true : false;

  return (
    <div className={styles.tabsHeader}>
      <menu>{children}</menu>
      {hasSwapButton && (
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
  );
}

export default Tabs;
