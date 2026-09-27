import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";

// Placeholder image – replace with your own logo or system screenshot
import geospanImage from "../../images/Geospan/geospan.png";

const GeoSpan = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const class_text = "Geospan";

  const handleSubmit = () => {
    handleShow();
  };

  return (
    <>
      <div className="col-sm">
        <CardTile
          photo={geospanImage}
          text={class_text}
          event={() => handleSubmit()}
        />
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Title
          style={{ paddingLeft: 10, display: "flex", justifyContent: "center" }}
        >
          <div>
            <h1 className="font-weight-light">{class_text}</h1>
          </div>
        </Modal.Title>

        <Modal.Body>
          <div className="font-weight-light">
            <h4 className="font-weight-light">My Contributions</h4>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />

            <p>
              I cofounded Geospan to deliver road intelligence that helps
              vehicles see further ahead by tapping into external sensors. As
              the CTO I led the design and development of the platform's key
              components.
            </p>

            <p>
              Pulse units attach to existing or new roadside cameras and run
              detection at the edge, picking up wildlife, flooding, debris,
              roadworks, congestion and the condition of road assets as they
              happen. That information is sent straight out to connected
              vehicles, maps, signage and infrastructure so drivers are warned
              early enough to react.
            </p>

            <p>
              Atlas is the cloud portal behind it. Road operators use it to
              monitor their network, review detections, tune models and
              coordinate a response. It also supplies curated real world
              training data to ADAS and autonomy teams.
            </p>

            <p>
              The platform is hosted in Australia on AWS, and is built to detect
              road conditions rather than people.
            </p>


            <h4 className="font-weight-light">Links</h4>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />
            <ul>
              <li>
                <a
                  href="https://www.geospan.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Geospan Website
                </a>
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
};

export default GeoSpan;
