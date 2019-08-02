import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";

import Img from "./components/image.js"
import ImgCopyright from "./components/copyright.js"
import ImgDate from "./components/date.js"
import ImgDescription from "./components/description.js"
import ImgTitle from "./components/title.js"

function App() {
const [image, setImage] = useState();
const [copyright, setCopyright] = useState();
const [date, setDate] = useState();
const [description, setDescription] = useState();
const [title, setTitle] = useState();

useEffect(() => {
  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=C2gDpb1UYKlNJSaxiBmrYma1BfjmR1hPvP8KTkPp')
    .then(response => {
      setImage(response.data.url);
      setCopyright(response.data.copyright);
      setDate(response.data.date);
      setDescription(response.data.explanation);
      setTitle(response.data.title);
      console.log(response, "Success!")
    })
    .catch(error => {
      console.log(error)
    })
}, [])

  const Container = styled.div `
    display: flex;
    flex-direction: row;
    max-width: 1000px;
    margin: 0 auto;
  `;

  const Copyright = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const Left = styled.div `
    width: 500px;
    margin-right: 20px;
  `;

  const Right = styled.div `
    width: 450px;
    margin-top: 50px;
    font-size: 21px;
    line-height: 1.5;
  `;

  const Header = styled.div `
    text-align: center;
    background: #CCC;
    padding: 20px 0;
    width: 100%;
  `;

  const Heading1 = styled.h1 `
    margin-top: 0;
  `;

  return (
    <div>
      <Header>
        <Heading1>Astronomy Photo Of The Day</Heading1>
      </Header>
      <Container>
        <Left>
          <ImgTitle title={title} />
          <Img imgUrl={image} />
          <Copyright>
            <ImgCopyright copyright={copyright} />
            <ImgDate date={date} />
          </Copyright>
        </Left>
        <Right>
          <ImgDescription description={description} />
        </Right>
      </Container>
    </div>
  );
}

export default App;