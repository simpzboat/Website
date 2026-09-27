import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// Placeholder image for Brick (replace with real image if available)
import brickImage from '../../images/brick.png';

const images = [
    {
        original: brickImage,
        thumbnail: brickImage,
    },
];

const Brick = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const class_text = "Brick Robot";

    const handleSubmit = () => {
        handleShow();
    };

    return (
        <>
            <div className="col-sm">
                <CardTile
                    photo={brickImage}
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

                        <h4 className="font-weight-light">Descriptions</h4>
                        <hr style={{ colour: "black", backgroundColour: "white", height: 5 }} />

                        <p>
                            I configured and deployed the entire sensor stack for the Brick Robot, a compact version of the Inspector robot. I refactored the existing sensor code to suit the new platform, implementing inheritance-based architecture for each sensor and integrating MicroROS and ROS2 nodes on a Raspberry Pi. ARM compatibility issues and Ubuntu serverless limitations were resolved through rigorous documentation and troubleshooting.
                        </p>

                        <p>
                            I also managed the full Linux environment setup on the Pi, including custom screen resolution, audio, networking, and ROS2 installation. Unlike standard x86 Linux systems, this required in-depth debugging of file system quirks and package inconsistencies unique to the Pi's ARM architecture.
                        </p>

                        <p>
                            To enhance functionality, I developed a LED feedback interface connected via MicroROS to control status indicators (e.g. transmission, boot states). This ensured synchronisation between the Raspberry Pi and the Teensy microcontroller, allowing the Brick Robot to visually communicate its state.
                        </p>


                        <h4 className="font-weight-light">Gallery</h4>
                        <hr style={{ colour: "black", backgroundColour: "white", height: 5 }} />
                        <ImageGallery items={images} />

                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Brick;
