import React from "react";
import Header from "./Header";

interface Props {
  children: any;
}

export default function MainLayout({ children }: Props) {
  return (
    <React.Fragment>
      <Header></Header>
      {children}
    </React.Fragment>
  );
}
