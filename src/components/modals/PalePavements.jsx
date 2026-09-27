import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import palePavementImage from "../../images/AnimalDetection/pale_pavement_detection.png";

const images = [
  {
    original: palePavementImage,
    thumbnail: palePavementImage,
  },
];

const PalePavements = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const class_text = "Pale Pavements and AI Animal Detection";

  return (
    <>
      <div className="col-sm">
        <CardTile
          photo={palePavementImage}
          text={class_text}
          event={() => handleShow()}
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
            <h4 className="font-weight-light">Description</h4>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />

            <p>
              Pale pavement is a surface treatment that reflects heat instead of
              holding it in the road. What was not known is how that extra
              reflectance affects the cameras and detection models watching the
              road, and whether a lighter surface makes animals easier or harder
              for a model to pick up.
            </p>

            <p>
              To test this we built full scale animal targets, including a
              kangaroo and a wombat, sized and surfaced so that a detection
              model reads them the same way it reads the real thing. These were
              run in front of the detection stack across both treated and
              untreated pavement.
            </p>

            <p>
              The trial measured how much the road surface itself affects AI
              animal detection, which is the groundwork needed before pale
              pavement and roadside detection get rolled out alongside each
              other. Transport for NSW published the results.
            </p>


            <h4 className="font-weight-light">Report</h4>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />
            <ul>
              <li>
                <a
                  href="https://www.transport.nsw.gov.au/system/files/media/documents/2026/pale-pavement-trial-report-may-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Transport for NSW Pale Pavement Trial Report
                </a>
              </li>
            </ul>

            <h4 className="font-weight-light">Gallery</h4>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />
            <ImageGallery items={images} />
          </div>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
};

export default PalePavements;
