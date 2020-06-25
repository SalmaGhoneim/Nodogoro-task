import React, { useContext } from "react";
import data from "../data.json";
import FlexContainer from "../elements/FlexContainer";
import { SearchContext } from "../contexts/SearchContext";
import styled from "styled-components";
// import { FaMotorcycle } from "react-icons/fa";
import Banner from "../components/Banner";
import VerticalScrollImages from "../components/VerticalScrollImages";
import Sidebar from "../components/Sidebar";
import Gallery from "../components/Gallery";

const Home = ({ className }) => {
  return (
    <FlexContainer
      width="100%"
      padding="0px 10px"
      alignItems="center"
      direction="column"
      className={className}
    >
      <Banner text="Get 50 EGP on your first online order above 100 EGP. Use promo FIRST50 on checkout. Click here to start" />
      <VerticalScrollImages data={9} height="300px" width="250px" />
      <FlexContainer justifyContent="space-between" margin="10px" width="100%">
        <Sidebar />
        <div className="fixWidth">
          <h1 className="title">Discover Top Dishes</h1>
          <VerticalScrollImages data={11} height="150px" width="100px" />
          <h1 className="title">Restaurants</h1>
          <Gallery />
          <button className="bigButton">Load more Restaurants</button>
        </div>
      </FlexContainer>
    </FlexContainer>
  );
};

export default styled(Home)`
  box-sizing: border-box;
  @media (max-width: 768px) {
    justify-content: center;
  }
  .orange {
    color: ${(props) => props.theme.colors.orange};
  }
  .fixWidth {
    width: 80%;
    margin-top: 20px;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  .title {
    color: #464748;
  }
  .bigButton {
    width: 100%;
    background: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};
    outline: none;
    border: none;
    text-transform: uppercase;
    border-radius: 4px;
    margin: 20px 0px;
    padding: 15px 0px;
    cursor: pointer;
    font-size: 1.1rem;
    &:hover {
      /* background: ${(props) => props.theme.colors.orange}; */
      background: #e03f35;
    }
  }
`;
