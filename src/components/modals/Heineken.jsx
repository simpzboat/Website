import React, { Text, useEffect } from "react";
import heinkein_arm from "../../images/robot_arms_heinkein.png";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import ReactPlayer from "react-player";
import "react-image-gallery/styles/css/image-gallery.css";

import { isMobile } from "react-device-detect";

import hein1 from "../../images/heinken/hein1.png";
import hein2 from "../../images/heinken/hein2.png";
import hein3 from "../../images/heinken/hein3.png";
import hein4 from "../../images/heinken/hein4.png";

const images = [
  {
    original: hein1,
    thumbnail: hein1,
  },
  {
    original: hein2,
    thumbnail: hein2,
  },
  {
    original: hein3,
    thumbnail: hein3,
  },
  {
    original: hein4,
    thumbnail: hein4,
  },
];

const Heineken = () => {
  const [show, setShow] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const class_text = "Robotic Bar";

  const handleSubmit = (e) => {
    handleShow();
  };
  
  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  return (
    <>
      <div class="col-sm">
        <CardTile
          photo={heinkein_arm}
          text={class_text}
          event={() => handleSubmit()}
        />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size={mobile ? null : "lg"}
        style={mobile ? { width: "100%" } : null}
      >
        {mobile ? (
          <div
            onClick={handleClose}
            style={{
              justifyContent: "flex-end",
              display: "flex",
              paddingRight: 10,
            }}
          >
            <p style={{ fontSize: 30, marginTop: 0 }}>
              <b>x</b>
            </p>
          </div>
        ) : null}
        <Modal.Title
          style={{ paddingLeft: 10, display: "flex", justifyContent: "center" }}
        >
          <div>
            <h1 class="font-weight-light" size="lg">
              {class_text}
            </h1>
          </div>
        </Modal.Title>

        <Modal.Body>
          <div class="font-weight-light">
            <h4 class="font-weight-light">Description</h4>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />
            This role involved working with a team of 2 other individuals to
            program a 'robotic bar' for the promotion of the new Heineken 0.0,
            zero alcohol beer. This full-on role involved robotic arm movement
            using the UR-5 robotic arms, various sensors, person detection using
            machine learning, an automated conveyor system, ROS interfacing and
            a surplus of analog I/O electrical wiring. We worked directly with a
            marketing team, creating various on-the-spot changes to the robot,
            to finalise a pair of robots for a week-long activation period.
            <br></br>
            <br></br>
            <h4 class="font-weight-light">Media</h4>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ReactPlayer url="https://www.youtube.com/watch?v=UshAeMjsIK8&feature=emb_logo&ab_channel=Heineken" />
            </div>
            <br></br>
            <br></br>
            <h4 class="font-weight-light">Gallery</h4>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />
            <ImageGallery items={images} />
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Heineken;
