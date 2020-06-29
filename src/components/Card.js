import React from "react";
import styled from "@emotion/styled";
import Share from "./Share";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  max-width: 320px;
`;
const Img = styled.img`
  max-width: 320px;
  max-height: 200px;
`;
const ImgProfile = styled.img``;
const UserInformation = styled.section`
  display: flex;
`;
const H4 = styled.h4``;
const H1 = styled.h1``;
const Paragraph = styled.p``;
const Date = styled.span``;
const ShareIcon = styled.div``;

const Card = (props) => {
  const {
    profileImg,
    publicationImg,
    description,
    title,
    name,
    publicationDate
  } = props;
  return (
    <Container>
      <Img src={publicationImg} />
      <H1>{title}</H1>
      <Paragraph>{description}</Paragraph>
      <UserInformation>
        <ImgProfile src={profileImg} />
        <H4>{name}</H4>
        <Date>{publicationDate}</Date>
        <ShareIcon />

        <Share />
      </UserInformation>
    </Container>
  );
};

export default Card;
