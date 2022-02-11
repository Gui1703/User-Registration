import React from "react";
import { Button as ContainerButton } from "./styles";

export default function Button({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>;
}
