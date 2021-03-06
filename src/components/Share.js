import React from "react";
import styled from "@emotion/styled";

import { ReactComponent as Facebook } from "./../static/images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../static/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../static/images/icon-pinterest.svg";
import ShareIcon from "./ShareIcon";

const Container = styled.section`
  position: absolute;
  bottom: 0px;
  background-color: ${(props) => props.theme.colors.neutralVeryDarkViolet};
  padding: 24px 12px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 0px 0px 20px 20px;
  > span {
    color: ${(props) => props.theme.colors.lightGrayishBlue};
  }

  @media (min-width: 679px) {
    bottom: 90px;
    right: -50px;
    position: absolute;
    width: 200px;
    border-radius: 10px;
    padding: 12px;
    > button {
      display: none;
    }

    &:before {
      position: absolute;
      bottom: -13px;
      border-top: 20px solid
        ${(props) => props.theme.colors.neutralVeryDarkViolet};
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      content: " ";
    }
  }
`;

const ShareContainer = (props) => {
  const { onClick } = props;
  return (
    <Container>
      <span>SHARE</span>
      <Facebook />
      <Twitter />
      <Pinterest />
      <ShareIcon
        onClick={onClick}
        background="hsla(0, 0%, 85%, 0.56)"
        fill="white"
        size="24px"
      />
    </Container>
  );
};

export default ShareContainer;
