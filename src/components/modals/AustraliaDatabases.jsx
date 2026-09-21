import React, { useEffect } from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import { isMobile } from "react-device-detect";

import openmap from "../../images/openmap.png";

const AustraliaDatabases = () => {
  const [show, setShow] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const class_text = "Australia Databases";

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
          photo={openmap}
          text={class_text}
          event={() => handleSubmit()}
        />
      </div>
        <Modal show={show} onHide={handleClose} size={mobile ? null : "lg"}>
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
            Australian databases is a website I created to host crucial
            Australian data. Normally this data is hard to find and hidden
            behind pay walls. This involved me creating python scripts to read
            and create datasets, and then using React and AWS to host the data.
            <br></br>
            <div
              style={{
                justifyItems: "center",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                width: "50%",
              }}
            ></div>
            <br></br>
            <h4 class="font-weight-light">Website</h4>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />
            <p>
              The following website was designed and hosted (using AWS) by
              myself.
            </p>
            <div style={{ paddingLeft: 20, paddingBottom: 20 }}>
              <a href="https://www.australiadatabases.com/" rel="noreferrer">
                Australia Databases Website
              </a>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default AustraliaDatabases;
