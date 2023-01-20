import React, { FC, ReactNode } from "react";
import { Header, Footer } from "components/Layout";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <div
        style={{
          padding: "0 120px",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
