import React from "react";
import styled from "@emotion/styled";

import { ReactComponent as Share } from "../static/images/icon-share.svg";

const Container = styled.button`
  background-color: ${(props) => props.background};
  border: 0px;
  border-radius: 50%;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  padding-left: 4px;

  > svg > path {
    fill: ${(props) => (props.fill ? props.fill : "inherit")};
  }
`;

const ShareIcon = (props) => {
  const { fill, background, size, onClick } = props;
  return (
    <Container
      fill={fill}
      background={background}
      onClick={onClick}
      size={size}
    >
      <Share />
    </Container>
  );
};

export default ShareIcon;
