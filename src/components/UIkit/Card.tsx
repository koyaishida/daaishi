import React, { FC } from "react";
import styles from "styles/top.module.scss";

interface Props {
  title: string;
  description?: string;
}

const Card: FC<Props> = (props) => {
  const { title, description } = props;
  return (
    <div className={styles.top__title__wrap}>
      <h2 className={styles.top__title}>{title}</h2>
      <span className={styles.top__title__border} />
      {description && <p className={styles.top__title__en}>{description}</p>}
    </div>
  );
};

export default Card;
