import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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



  return (
    <div className="App container">
      <h1>Astronomy Photo Of The Day</h1>
      <div className="card">
        <ImgTitle title={title} />
        <Img imgUrl={image} />
        <div className="caption">
          <ImgCopyright copyright={copyright} />
          <ImgDate date={date} />
        </div>
        <ImgDescription description={description} />
      </div>
    </div>
  );
}

export default App;