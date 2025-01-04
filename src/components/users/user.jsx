import styles from "./User.module.css";
import { PiUserFocusFill } from "react-icons/pi";
import clsx from "clsx";

const User = ({ name, email, bio, isOpenToWork }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        {name} <PiUserFocusFill className={styles.iconUser } />
      </h3>
      <p className={styles.text}>{email}</p>
      <p className={styles.text}>{bio}</p>
      <p
        className={clsx(
          styles.status,
          isOpenToWork ? styles.green : styles.red
        )}
      >
        {isOpenToWork ? "want to work" : "do not want to work"}
      </p>
    </div>
  );
};
export default User;
