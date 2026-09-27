import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import evmap1 from '../../images/EVChargingMap/electric_vehicle_charging_map.png';
import evmap2 from '../../images/EVChargingMap/electric_vehicle_charging_map2.png';
import evmap3 from '../../images/EVChargingMap/electric_vehicle_charging_map3.png';
import evmap4 from '../../images/EVChargingMap/electric_vehicle_charging_map4.png';

const images = [
    {
      original: evmap1,
      thumbnail: evmap1,
    },
    {
      original: evmap2,
      thumbnail: evmap2,
    },
    {
      original: evmap3,
      thumbnail: evmap3,
    },
];

const EVChargingMap = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const class_text = "EV Charging Map";

    const handleSubmit = (e) => {
      handleShow();
    };

    return (
    <>
        <div className="col-sm">
            <CardTile
                photo={evmap4}
                text={class_text}
                event={() => handleSubmit()}
            />
        </div>
        <Modal show={show} onHide={handleClose} size="lg">

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
                        I developed a web application to dynamically map electric vehicle (EV) charging stations. The app is hosted on AWS Amplify and uses a backend built with AWS Lambda Functions to ingest live data from an open API. The map provides filtering by operator, charging status, and charger type. Users can click on locations to reveal metadata including station address, operator, power rating, and status.
                    </p>


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

export default EVChargingMap;
