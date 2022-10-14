import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: any;
}

export default function MainLayout({ children }: Props) {
  return (
    <React.Fragment>
      <Header></Header>
      {children}
      <Footer></Footer>
    </React.Fragment>
  );
}
