import React from "react";
import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: 500px;
`;


const Img = (props) => {
  return (
    <div>
      <StyledImg src={props.imgUrl} alt="APOD" />
    </div>
  );
};

export default Img;