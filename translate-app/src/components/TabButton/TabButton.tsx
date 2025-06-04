import type { ReactElement } from "react";
import styles from "./TabButton.module.css";

interface ITabButton {
  onClick: () => void;
  children: ReactElement | string;
  isActive: boolean;
  isDisabled: boolean;
}

function TabButton({ isActive, isDisabled, onClick, children }: ITabButton) {
  return (
    <button
      disabled={isDisabled}
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TabButton;
