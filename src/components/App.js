import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Pragramming Languages" direction="horizontal">
        <div>React</div>
        <div>JavaScript</div>
        <div>Python</div>
        <div>Java</div>
        <div>PHP</div>
        <div>C#</div>
        <div>CSS</div>
      </Container>
      <Container header="Example header" textPosition="center">
      <img
          alt="React"
          src="https://e0.pxfuel.com/wallpapers/183/962/desktop-wallpaper-how-to-build-a-search-app-with-react-using-the-unsplash-api-digitalocean-react-native.jpg"
          className="small-image"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>
    </div>
  );
}

export default App;
