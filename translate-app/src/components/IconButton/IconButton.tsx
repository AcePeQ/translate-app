import styles from "./IconButton.module.css";

function IconButton({
  label,
  isDisabled,
  icon,
  onClick,
}: {
  label: string;
  icon: string;
  isDisabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      aria-label={label}
      className={styles.button}
    >
      <img aria-disabled={true} className={styles.buttonIcon} src={icon} />
    </button>
  );
}

export default IconButton;
