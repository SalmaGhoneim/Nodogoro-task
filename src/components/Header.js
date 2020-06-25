import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import FlexContainer from "../elements/FlexContainer";
import logo from "../icons/logo.png";
import logoSmall from "../icons/logo-pic-only.png";

import { FaMotorcycle } from "react-icons/fa";

import { RiFilterLine } from "react-icons/ri";

import { RiShoppingBag3Line } from "react-icons/ri";
import { LanguageContext } from "../contexts/LanguageContext";
import { SearchContext } from "../contexts/SearchContext";
import data from "../data.json";

const BigButton = styled.button`
  height: 100%;
  width: 100px;
  background: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.lightBlack};
  cursor: pointer;
  border: none;
  outline: none;
  margin: 0px 10px;
  font-weight: 600;
  ${(props) =>
    props.selected &&
    css`
      background: ${(props) => props.theme.colors.orange};
      color: ${(props) => props.theme.colors.white};
    `}
  &:hover {
    background: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
const SmallButton = styled(BigButton)`
  height: 30px;
  width: 100px;
  border: none;
  &:hover {
    text-decoration: underline;
    background: inherit;
    color: inherit;
    ${(props) =>
      props.selected === true &&
      css`
        text-decoration: none;
        background: ${(props) => props.theme.colors.orange};
        color: ${(props) => props.theme.colors.white};
      `}
  }
`;

const LanguageButton = styled(SmallButton)`
  height: 100%;
  color: ${(props) => props.theme.colors.lightBlack};
  margin: 0px 5px;
  &:hover {
    text-decoration: inherit;
    background: inherit;
  }
`;
const FilterButton = styled(LanguageButton)`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.orange};
  width: auto;
  padding: 0px 20px;
  box-shadow: 0 1px 2px 0.5px #ccc;
  border-radius: 4px;
  @media (max-width: 1024px) {
    display: block;
  }
`;
const Header = ({ className }) => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [selectedTab, setSelectedTab] = useState(0);
  // TODO
  // const {user} = useContext(UserContext)

  return (
    <FlexContainer className={className} direction="column" width="100%">
      <FlexContainer
        direction="row"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Small Screens */}
        <FlexContainer
          className="small"
          height="100%"
          width="100%"
          margin="10px 0px"
          justifyContent="space-evenly"
        >
          <img alt="elmenues" className="logoSmall" src={logoSmall} />
          <input
            className="search"
            type="text"
            placeholder="Find a Restaurant"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <FilterButton>
            <RiFilterLine className="logoSmall" />
          </FilterButton>
        </FlexContainer>

        <FlexContainer className="big" height="100%" width="100%">
          {/* Big Screens */}
          <FlexContainer height="100%" width="100%">
            <img alt="logo" className="logo" src={logo} />
            <BigButton
              // 0 should be id
              onClick={() => setSelectedTab(0)}
              selected={selectedTab === 0 ? true : false}
            >
              Delivery
            </BigButton>
            <BigButton
              // 1 should be id
              onClick={() => setSelectedTab(1)}
              selected={selectedTab === 1 ? true : false}
            >
              Dine out
            </BigButton>
          </FlexContainer>

          <FlexContainer height="100%" alignItems="center">
            {/* User? null :  display the login and startup   */}
            <SmallButton selected>Login</SmallButton>
            <SmallButton>Sign up</SmallButton>
            <FlexContainer alignItems="center" className="borderLeft">
              <RiShoppingBag3Line className="shoppingBag" />
              <LanguageButton onClick={toggleLanguage}>
                {language}
              </LanguageButton>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer alignItems="center" style={{ width: "100%" }}>
        <input
          className="searchBottom"
          type="text"
          placeholder="Find a Restaurant"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <FlexContainer
          alignItems="center"
          width="100%"
          className="centeronSmallScreens"
        >
          <FaMotorcycle className="motorCycle" />
          <h2 className="font">
            Deliver to <span className="orange"> {data.currentLocation} </span>
          </h2>
          <button className="change">Change</button>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default styled(Header)`
  .small {
    display: none;
    @media (max-width: 1024px) {
      padding: 10px 0px;
      height: 40px;
      border: none;
      display: flex;
      padding: 0px 10px;
    }
  }
  .big {
    height: 70px;
    border-bottom: 2px solid #eee;
    display: flex;
    border-top: 10px solid ${(props) => props.theme.colors.orange};
    @media (max-width: 1024px) {
      display: none;
    }
  }

  /* Small */
  .logoSmall {
    display: block;
    height: 100%;
    object-fit: cover;
    margin: 0px 5px;
  }
  .search {
    width: 80%;
    border: none;
    outline: none;
    box-shadow: 0 1px 2px 0.5px #ccc;
    border-radius: 4px;
    padding: 0px 5px;
    color: ${(props) => props.theme.colors.lightBlack};
    ::placeholder {
      color: #d0d0d0;
    }
  }

  /* Big */
  .logo {
    width: 200px;
    height: 100%;
    object-fit: cover;
  }
  .borderLeft {
    border-left: 2px solid #eee;
    height: 100%;
    padding: 0px 10px;
  }
  .shoppingBag {
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.colors.lightBlack};
    cursor: pointer;
  }

  .searchBottom {
    width: 55%;
    height: 40px;
    margin-left: 20px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 0px 10px;
    border: none;
    outline: none;
    ::placeholder {
      color: #d0d0d0;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .centeronSmallScreens {
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
  .motorCycle {
    color: ${(props) => props.theme.colors.orange};
    width: 2rem;
    height: 2rem;
    margin: 10px;
  }
  .change {
    background: white;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.orange};
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    margin: 10px;
    padding: 5px 10px;
    border-radius: 4px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .font {
    font-size: 1.3rem;
  }
  .orange {
    color: ${(props) => props.theme.colors.orange};
  }
`;
