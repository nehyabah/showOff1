import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * Props is an object that has optional properties of img, category, and description.
 * @property {string} img - The image to display in the card.
 * @property {string} category - The category of the product.
 * @property {string} description - The description of the card.
 */

type Props = {
  img: string;
  category: string;
  description: string;
  link: string;
};

const Card: React.FC<Props> = ({ img, category, description, link }) => {
  return (
    <Wrapper>
      <Link to={`/category/${link}`}>
        <img src={img} alt="thumbnail" className="img" />
      </Link>
      <div className="details">
        <h3> {category}</h3>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* height: 45rem; */
  width: 25rem;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  margin: 2rem;
  -webkit-box-shadow: 0px 0px 14px -5px #000000;
  box-shadow: 0px 0px 14px -5px #000000;

  img {
    width: 100%;
    border-radius: 16px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .img {
    z-index: -1;
  }

  .img:hover {
    transform: scale(1.1);
  }

  .details {
    margin: 1rem;
    width: 80%;

    p {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 576px) {
  }
`;

export default Card;
