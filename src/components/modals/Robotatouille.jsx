import React, {useState, useEffect} from "react";
import { isMobile } from "react-device-detect";
import cooking_robot from '../../images/cooking_robot.png'
import CardTile from "../cards/CardTile"
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import { pdf_library, image_library } from "./media";


import SinglePagePDFViewer from "./single-page";

const images = [
    {
      original: image_library.Robotatouille1,
      thumbnail: image_library.Robotatouille1,
    },
    {
      original: image_library.Robotatouille2,
      thumbnail: image_library.Robotatouille2,
    },
    {
      original: image_library.Robotatouille3,
      thumbnail: image_library.Robotatouille3,
    },
    {
      original: image_library.Robotatouille4,
      thumbnail: image_library.Robotatouille4,
    },
    {
      original: image_library.Robotatouille5,
      thumbnail: image_library.Robotatouille5,
    },
  ];

const Robotatouille = () => {
    const [show, setShow] = React.useState(false);

    const [mobile, setMobile] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const class_text = "Robotatouille"

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        if (isMobile) {
            setMobile(true);
        }
    }, []);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    const handleSubmit = (e) => {
      handleShow();
    };

    return(
    <><div class="col-sm">
        <CardTile
            photo={cooking_robot}
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
                    <h1 class="font-weight-light" size="lg">
                    {class_text}
                    </h1>

                </div>
            </Modal.Title>

            <Modal.Body>
                <div class="font-weight-light">

                    <h4 class="font-weight-light">
                        Description
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    This project involved working with 2 other individuals to create a cooking robot, conned '<i>Robotatouille</i>'. This full-on role involved robotic arm movement using the UR-5 robotic arms, a weight sensor, a RGBD camera and various props. The software was built using ROS, and an accurate machine learning model was created to predict and locate recipe ingredients.  The training data was hand made with many hours of tedious labelling.  The system was able to read a recipe, locate the ingredients, perform cooking steps (stirring, measuring, mixing) and perform advanced path planning. 
                    <br>
                    </br>
                    <br>
                    </br>

                    <h4 class="font-weight-light">
                        Research Paper
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />

                    <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>   
                    <SinglePagePDFViewer pdf={pdf_library.robotatouille} />
                    </div>
                    </div>
                    <br>
                    </br>
                    <br>
                    </br>
                    <h4 class="font-weight-light">
                        Video
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                    <ImageGallery items={images} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Robotatouille
