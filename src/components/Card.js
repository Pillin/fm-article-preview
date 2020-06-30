import React, { useState } from "react";
import styled from "@emotion/styled";
import Share from "./Share";
import ShareIcon from "./ShareIcon";

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  max-width: 320px;
  background-color: white;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const Img = styled.img`
  max-width: 320px;
  max-height: 200px;
  border-radius: 20px 20px 0px 0px;
`;
const ImgProfile = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;
const UserInformation = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 50px;
  width: 100%;
`;
const H4 = styled.h4`
  margin: 0px;
  color: ${(props) => props.theme.colors.neutralVeryDarkGrayishBlue};
`;
const H1 = styled.h1`
  margin: 0px;
  color: ${(props) => props.theme.colors.neutralVeryDarkGrayishBlue};
`;
const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.grayishBlue};
`;
const Date = styled.span`
  color: ${(props) => props.theme.colors.grayishBlue};
`;

const Card = (props) => {
  const {
    profileImg,
    publicationImg,
    description,
    title,
    name,
    publicationDate
  } = props;

  const [socialMedia, setSocialMedia] = useState(false);
  return (
    <Container>
      <Img src={publicationImg} />
      <Content>
        <H1>{title}</H1>
        <Paragraph>{description}</Paragraph>
        <UserInformation>
          <ImgProfile src={profileImg} />
          <H4>{name}</H4>
          <Date>{publicationDate}</Date>
          <ShareIcon
            onClick={() => setSocialMedia(true)}
            background="hsla(0, 0%, 85%, 0.56)"
            fill="hsl(260, 8%, 14%)"
            size="40px"
          />
        </UserInformation>
      </Content>
      {socialMedia && <Share onClick={() => setSocialMedia(false)} />}
    </Container>
  );
};

export default Card;
