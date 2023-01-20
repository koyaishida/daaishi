import React, { FC } from "react";
import styles from "styles/top.module.scss";

interface Props {
  title: string;
  description?: string;
}

const SectionTitle: FC<Props> = (props) => {
  const { title, description } = props;
  return (
    <div className={styles.top__title__wrap}>
      <h2 className={styles.top__title}>{title}</h2>
      {description && (
        <>
          <span className={styles.top__title__border} />
          <p className={styles.top__title__en}>{description}</p>
        </>
      )}
    </div>
  );
};

export default SectionTitle;
