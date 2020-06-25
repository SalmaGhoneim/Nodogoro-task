import React, { useState } from "react";
import FlexContainer from "../elements/FlexContainer";
import { MdRadioButtonUnchecked, MdCheckBoxOutlineBlank } from "react-icons/md";

import styled from "styled-components";

const iconTitle = ({ icon, title }) => (
  <FlexContainer margin="5px">
    {icon === "checkbox" ? (
      <MdCheckBoxOutlineBlank className="icon" />
    ) : (
      <MdRadioButtonUnchecked className="icon" />
    )}
    {title}
  </FlexContainer>
);

const Sidebar = ({ className }) => {
  const [choicesIds, setChoicesId] = useState([]);

  return (
    <FlexContainer className={className} direction="column">
      <h2>Show results for: </h2>
      <p>Online ordering for</p>
      {iconTitle({ icon: "radiobutton", title: "open now" })}
      {iconTitle({ icon: "radiobutton", title: "Promo" })}
      {iconTitle({ icon: "radiobutton", title: "Hygiene Check" })}

      <p>Sort by</p>
      {iconTitle({ icon: "checkbox", title: "Popular" })}
      {iconTitle({ icon: "checkbox", title: "Rating" })}
      {iconTitle({ icon: "checkbox", title: "Deliver Time" })}
    </FlexContainer>
  );
};

export default styled(Sidebar)`
  width: 200px;
  color: #7b7d7f;
  margin-top: 20px;
  @media (max-width: 1024px) {
    display: none;
  }
  .icon {
    margin: 0px 5px;
    cursor: pointer;
  }
`;
