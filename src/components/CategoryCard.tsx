import React from "react";
import styled from "styled-components";

/**
 * Props is an object with a property img of type string and a property text of type string.
 * @property {string} img - string;
 * @property {string} text - The text to display in the card.
 */
type Props = {
  img: string;
  text: string;
};

const CategoryCard: React.FC<Props> = ({ img, text }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="details">
          <h3> {text}</h3>
        </div>
        <div className="img-cont">
          <img src={img} alt="thumbnail" className="img" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 20rem;
  width: 80rem;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  margin: 2rem auto;
  -webkit-box-shadow: 0px 0px 14px -5px #000000;
  box-shadow: 0px 0px 14px -5px #000000;
  cursor: pointer;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
  }

  img {
    width: 100%;
    border-radius: 16px;
    transition: transform 0.2s;
    height: 20rem;
    object-fit: cover;
  }

  .img {
    z-index: -1;
  }

  .img-cont {
    flex: 1 1 40rem;
  }

  .img:hover {
    transform: scale(1.05);
  }

  .details {
    margin: 1rem;
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex: 1 1 20rem;

    h3 {
      color: black;
    }

    h3:hover {
      color: #6f6d6d;
    }

    p {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 576px) {
  }
`;

export default CategoryCard;
