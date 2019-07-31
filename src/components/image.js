import React from "react";

const Img = (props) => {
  return (
    <div>
      <img src={props.imgUrl} alt="APOD" />
    </div>
  );
};

export default Img;