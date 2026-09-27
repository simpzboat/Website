import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import ReactPlayer from "react-player";
import "react-image-gallery/styles/css/image-gallery.css";

// Sample images (replace with real ones later)
import traffic1 from '../../images/SmartTrafficLanterns/smarttrafficintersection2.png';
import traffic2 from '../../images/SmartTrafficLanterns/smarttrafficintersection1.png';
import traffic3 from '../../images/SmartTrafficLanterns/smarttrafficintersection3.png';
import traffic4 from '../../images/SmartTrafficLanterns/smarttrafficintersection4.png';
import traffic5 from '../../images/SmartTrafficLanterns/smarttrafficintersection5.png';


import cover from "../../images/SmartTrafficLanterns/smarttrafficlight.png"

const images = [
    {
      original: traffic1,
      thumbnail: traffic1,
    },
    {
      original: traffic2,
      thumbnail: traffic2,
    },
    {
      original: traffic3,
      thumbnail: traffic3,
    },
    {
      original: traffic4,
      thumbnail: traffic4,
    },
];

const SmartTrafficLantern = () => {
    const [show, setShow] = React.useState(false);

    const [mobile, setMobile] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const class_text = "Smart Traffic Lantern Construction";

    const handleSubmit = (e) => {
      handleShow();
    };
    useEffect(() => {
        if (isMobile) {
            setMobile(true);
        }
    }, []);
    const linkStyle = {
        textDecoration: "underline",
      };
    return (
    <>
        <div className="col-sm">
            <CardTile
                photo={cover}
                text={class_text}
                event={() => handleSubmit()}
            />
        </div>
        <Modal show={show} onHide={handleClose} size="lg">
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

            <Modal.Title style={{ paddingLeft: 10, display: "flex", justifyContent: "center" }}>
                <div>
                    <h1 className="font-weight-light">
                        {class_text}
                    </h1>
                </div>
            </Modal.Title>

            <Modal.Body>
                <div className="font-weight-light">

                    <h4 className="font-weight-light">Description</h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <p>
                        I led the design and delivery of two separate intersections of smart traffic lantern infrastructure at FMTRC. The systems incorporated embedded technologies, fibre optics, and sensor integration to support future Cooperative Intelligent Transport Systems (C-ITS) and AI research. I produced detailed engineering drawings, coordinated procurement, managed construction, testing, and safety operations, and secured internal funding. This project successfully enabled further research collaborations and new revenue streams for FMTRC.
                    </p>


                    <h4 className="font-weight-light">Media Articles</h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <ul>
      <li>
        <a
          href="https://www.centralwesterndaily.com.au/story/8810079/cudal-unveils-new-smart-traffic-lights-for-road-safety/"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          Cudal unveils new smart traffic lights for road safety
        </a>
      </li>
      <li>
        <a
          href="https://www.insidestategovernment.com.au/tiny-town-switches-on-nsws-most-sophisticated-traffic-lights/"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          Tiny Town Switches on NSW's Most Sophisticated Traffic Lights
        </a>
      </li>
      <li>
        <a
          href="https://www.fullyloaded.com.au/the-next-generation-of-traffic-light-technology/"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          The Next Generation of Traffic Light Technology
        </a>
      </li>
      <li>
        <a
          href="https://www.miragenews.com/town-unveils-states-most-advanced-traffic-lights-1348016/"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          Town Unveils State's Most Advanced Traffic Lights
        </a>
      </li>
    </ul>

                    <h4 className="font-weight-light">Media Videos</h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=B-ZBBqK_NY8&ab_channel=unisydneyacfr" />
                    </div>

                    <h4 className="font-weight-light">Gallery</h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <ImageGallery items={images} />

                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default SmartTrafficLantern;
