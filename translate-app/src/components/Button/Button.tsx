import type { ReactElement } from "react";
import styles from "./Button.module.css";

function Button({
  isDisabled,
  isIconTranslate = true,
  onClick,
  children,
}: {
  isIconTranslate?: boolean;
  children: string | ReactElement;
  isDisabled: boolean;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} disabled={isDisabled} className={styles.button}>
      {isIconTranslate && (
        <img aria-disabled={true} src="Sort_alfa.svg" alt="sort alfa sign" />
      )}
      {children}
    </button>
  );
}

export default Button;
