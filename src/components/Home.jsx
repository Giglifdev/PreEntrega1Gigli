import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContainerStyles.css";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const carouselImg = [
    {
      src: "./Images/razer1.jpg",
      alt: "audio",
      caption: "Razer Barracuda Pro",
      captionText: "Wireless Gaming Headset with Hybrid ANC",
    },
    {
      src: "./Images/RAZER_BLACKWIDOW_V3.jpg",
      alt: "keyboard",
      caption: "Razer BlackWidow V3 - Yellow Switch",
      captionText:
        "Wireless Full-height Mechanical Gaming Keyboard with Razer Chroma RGB",
    },
    {
      src: "./Images/mouse_razer_basilisk_v3_pro.png",
      alt: "mouse",
      caption: "Razer Basilisk V3 Pro ",
      captionText:
        "Customizable Wireless Gaming Mouse with Razer HyperScroll Tilt Wheel",
    },
  ];
  return (
    <div className="carousel-container">
      <Carousel>
        {carouselImg.map((item, index) => (
          <Carousel.Item key={index}>
            <div>
              <img src={item.src} alt={item.alt} className="carousel-img" />
            </div>
            <Carousel.Caption>
              <h3>{item.caption}</h3>
              <p>{item.captionText}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
