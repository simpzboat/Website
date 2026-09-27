import React, { useState } from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Slider from "react-slick";
import ReactPlayer from "react-player";

import { image_library, video_library } from "./media";

const images = [
  { original: image_library.inspector_2, thumbnail: image_library.inspector_2 },
  { original: image_library.inspector, thumbnail: image_library.inspector },
  { original: image_library.inspector_3, thumbnail: image_library.inspector_3 },
];

const videoUrls = [
  video_library.inspector_demo,
  video_library.inspector_tracking,
];

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

const InspectorRobot = () => {
  const [show, setShow] = useState(false);
  const class_text = "Inspector Robot";

  return (
    <>
      <div className="col-sm">
        <CardTile
          photo={image_library.inspector}
          text={class_text}
          event={() => setShow(true)}
        />
      </div>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Title style={{ paddingLeft: 10, display: "flex", justifyContent: "center" }}>
          <h1 className="font-weight-light">{class_text}</h1>
        </Modal.Title>

        <Modal.Body className="font-weight-light">
          <section>
            <h4 className="font-weight-light">Description</h4>
            <hr style={{ backgroundColor: "white", height: 5 }} />
            <p>
              As Lead Mechatronics Engineer at AKIN AI, I designed and developed the embedded systems and AI backend for the "Inspector Robot," an AI-driven robot for NASA JPL applications. The robot performed person identification, ambient environmental monitoring, emotion and fatigue detection, navigation, actuation, speech recognition, and object detection.
            </p>
          </section>


          <section>
            <h4 className="font-weight-light">Gallery</h4>
            <hr style={{ backgroundColor: "white", height: 5 }} />
            <ImageGallery items={images} />
          </section>

          <section style={{ marginTop: "2rem" }}>
            <h4 className="font-weight-light">Videos</h4>
            <hr style={{ backgroundColor: "white", height: 5 }} />
            <div style={{ maxWidth: "800px", margin: "0 auto", marginBottom: 20 }}>
              <Slider {...sliderSettings}>
                {videoUrls.map((url, index) => (
                  <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#888" }}>
              Video {index + 1} of {videoUrls.length}
            </p>
            <ReactPlayer url={url} controls width="100%" />
  
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InspectorRobot;
