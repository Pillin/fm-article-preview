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
