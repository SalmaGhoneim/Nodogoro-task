import React from "react";
import FlexContainer from "../elements/FlexContainer";
import styled from "styled-components";
import burger from "../icons/burger.png";
import sandwich from "../icons/sandwich.jpg";

const Image = styled.img`
  height: 100%;
  margin: 0px 10px;
`;

const VerticalScrollImages = ({ className, height, data }) => {
  //   useEffect on [] and get Data

  return (
    <FlexContainer className={className} height={height}>
      {Array.from(Array(data)).map((x, i) => (
        // Key should be id
        <Image key={i} src={i % 2 === 1 ? burger : sandwich} />
      ))}
    </FlexContainer>
  );
};

export default styled(VerticalScrollImages)`
  overflow-x: auto;
  width: 100%;
  overflow-y: hidden;
  border-bottom: 1px solid #eee;
  padding: 10px 0px;
`;
