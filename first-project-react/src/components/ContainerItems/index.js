import React from "react";
import { ContainerItems as Container } from "./styles";

export default function ContainerItems({ children, isBlur }) {
  return <Container isBlur={isBlur}>{children}</Container>;
}
