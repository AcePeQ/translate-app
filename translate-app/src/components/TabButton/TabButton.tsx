import type { ReactElement } from "react";
import styles from "./TabButton.module.css";

interface ITabButton {
  isActive: boolean;
  onClick: () => void;
  isDisabled: boolean;
  children: ReactElement | string;
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
