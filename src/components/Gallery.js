import React from "react";
import FlexContainer from "../elements/FlexContainer";
import styled from "styled-components";
import pizza from "../icons/pizza.png";
import pasta from "../icons/pasta.png";

const Image = styled.img`
  height: 250px;
  margin: auto;
  width: 100%;
`;

const ImageCard = styled(FlexContainer)`
  padding: 10px;
  height: 320px;
  width: 30%;
  margin: auto;
  min-width: 200px;
  cursor: pointer;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }

  &:hover {
    background: #eee;
  }
`;
const getImageCard = ({ src, tags, restaurantName }) => (
  <ImageCard key={restaurantName + src}>
    {/* Key should be id */}
    <Image src={src} />
    <p className="tags">{tags}</p>
    <p className="restaurantName">{restaurantName}</p>
  </ImageCard>
);
const Gallery = ({ className }) => {
  return (
    <FlexContainer className={className}>
      {Array.from(Array(12)).map((x, i) => {
        return getImageCard({
          src: i % 2 === 1 ? pasta : pizza,
          tags: "yummy.food.burger",
          restaurantName: "Restaurant " + i,
        });
      })}
    </FlexContainer>
  );
};

export default styled(Gallery)`
  flex-wrap: wrap;
  .restaurantName {
    margin: 5px;
    padding: 0px;
    font-size: 1.2rem;
  }
  .tags {
    margin: 5px;
    padding: 0px;
    font-size: 0.9rem;
  }
`;
