import React from "react";
import { Props } from "~/models/layouts/main";

export const Main: React.FC<Props> = ({ children, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
