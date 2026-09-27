import React, { Text, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import { isMobile } from "react-device-detect";

import { pdf_library } from "./media";



import SinglePagePDFViewer from "./single-page";

const Resume = () => {
  const [show, setShow] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const class_text = "Resume";

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
      <div className="nav-item" >
        <p onClick={() => handleSubmit()}>{"Resume"}</p>
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
            <SinglePagePDFViewer pdf={pdf_library.resume} />
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Resume;
