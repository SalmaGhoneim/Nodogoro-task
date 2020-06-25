import React from "react";
import FlexContainer from "../elements/FlexContainer";
import styled from "styled-components";
import icon from "../icons/logo.png";

const Footer = ({ className }) => {
  return (
    <FlexContainer
      className={className}
      width="100%"
      minHeight="300px"
      padding="20px 10px 10px 10px"
    >
      <FlexContainer
        direction="column"
        className="fullWidthSmallScreens col1"
        margin="0px 20px"
      >
        <img alt="elmenues" src={icon} className="logo" />
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </FlexContainer>
      <FlexContainer
        direction="column"
        className="fullWidthSmallScreens col2"
        margin="0px 20px"
      >
        <p className="title">Other</p>
        <p className="text">About us</p>
        <p className="text">Privacy</p>
      </FlexContainer>
      <FlexContainer
        direction="column"
        className="fullWidthSmallScreens col3"
        margin="0px 20px"
      >
        <p className="title">Social</p>
        <p className="text">Facebook</p>
        <p className="text">Twitter</p>
      </FlexContainer>
      <FlexContainer
        direction="column"
        className="fullWidthSmallScreens col4"
        margin="0px auto"
      >
        <p className="title">Download our app</p>
      </FlexContainer>
    </FlexContainer>
  );
};

export default styled(Footer)`
  background: #eee;
  border-top: 2px solid ${(props) => props.theme.colors.orange};
  box-sizing: border-box;
  flex-wrap: wrap;
  .logo {
    width: 200px;
    height: 50px;
    object-fit: cover;
    @media (max-width: 1024px) {
      margin: 0px auto;
    }
  }
  .col1 {
    max-width: 35%;
  }
  .col2 {
    max-width: 10%;
  }
  .col3 {
    max-width: 10%;
  }
  .col4 {
    max-width: 40%;
  }
  .fullWidthSmallScreens {
    @media (max-width: 1024px) {
      min-width: 100%;
      text-align: center;
      margin: 0px auto;
    }
  }
  .text {
    font-size: 0.8rem;
    color: #0e0e0e;
    cursor: pointer;
  }
  .title {
    font-weight: 700;
    font-size: 0.9rem;
  }
`;
