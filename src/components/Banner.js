import React from "react";
import styled from "styled-components";
import FlexContainer from "../elements/FlexContainer";

const Banner = ({ className, text }) => {
  return (
    <FlexContainer className={className} margin="5px 0px" width="100%">
      <p className="text">{text}</p>
    </FlexContainer>
  );
};

export default styled(Banner)`
  width: 100%;
  padding: 10px;
  background: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};
  .text {
    margin: auto;
    font-size: 1.1rem;
  }
`;
