import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import harbourTunnelImage from "../../images/HarbourTunnel/harbour_tunnel_cits.png";

const images = [
  {
    original: harbourTunnelImage,
    thumbnail: harbourTunnelImage,
  },
];

const HarbourTunnel = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const class_text = "Sydney Harbour Tunnel C-ITS";

  return (
    <>
      <div className="col-sm">
        <CardTile
          photo={harbourTunnelImage}
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
              GPS does not work in a tunnel. Sydney has over 50km of road
              tunnel, and every vehicle that drives into one loses its position,
              which rules out wayfinding, incident response and anything a
              connected or automated vehicle needs to operate. This project
              tested whether C-ITS roadside units could fill that gap, and how
              accurately.
            </p>

            <p>
              I built a portable rig of V2X radios, sensors and logging packed
              into a case that could be driven through the Sydney Harbour Tunnel
              run after run. It recorded Cohda V2X-Locate position estimates
              alongside independent ground truth so the two could be compared
              along the full length of the tunnel.
            </p>

            <p>
              The trial ran with Transport for NSW, the University of Sydney and
              the iMOVE Australia CRC. It benchmarked how well V2X localisation
              holds up underground in terms of accuracy, reliability and whether
              it scales to the rest of the tunnel network.
            </p>


            <h4 className="font-weight-light">Links</h4>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />
            <ul>
              <li>
                <a
                  href="https://imoveaustralia.com/project/localisation-systems-for-gnss-denied-environments/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iMOVE Australia Project Page
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

export default HarbourTunnel;
