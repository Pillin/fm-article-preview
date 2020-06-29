import React from "react";
import styled from "@emotion/styled";

import { ReactComponent as Facebook } from "./../static/images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../static/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../static/images/icon-pinterest.svg";

const Container = styled.section``;

const Share = () => {
  return (
    <Container>
      <span>Share</span>
      <Facebook />
      <Twitter />
      <Pinterest />
    </Container>
  );
};

export default Share;
