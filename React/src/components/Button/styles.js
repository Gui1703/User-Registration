import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 342px;
  height: 74px;
  margin-top: 80px;
  margin-bottom: 40px;
  border: ${(props) => (props.isBack ? "1px solid #ffffff" : "none")};
  background: ${(props) =>
    props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};
  border-radius: 14px;
  cursor: pointer;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${(props) => props.isBack && "rotateY(180deg)"};
  }
`;
