import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";

import coreNLPImage from '../../images/CoreNLP/core_NLP.png';



const CoreNLP = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const class_text = "Core NLP";

    const handleSubmit = () => {
        handleShow();
    };

    return (
        <>
            <div className="col-sm">
                <CardTile
                    photo={coreNLPImage}
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
                        <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                        <p>
                            As part of AKIN AI I developed a voice auto-calibration system to improve NLP performance in noisy environments. This involved sampling ambient noise across 16 audio channels and dynamically adjusting input thresholds. I had to overcome challenges related to Linux sound configuration and hardware limitations (Matrix mic), but ultimately delivered a system that significantly improved robustness for voice recognition especially in field settings like the Inspector Robot.
                        </p>
                        <p>
                            I also designed and implemented the Core NLP service to handle natural language queries for Home AI applications. This service was written in Java using the Stanford CoreNLP library and supports list-based commands like “add carrots and potatoes to my list.” This was my first time working in Java, and I gained strong exposure to concepts like POS tagging, lemmatization, and dependency parsing.
                        </p>
                        <p>
                            To ensure reliability and iterative improvement, I built a full debugging and testing suite. I added accuracy and precision tracking, created a `debug.txt` file for failed NLP responses, and developed a custom testing tool that automates phrase verification and logs NLP parsing parameters making future development and validation significantly easier.
                        </p>


                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CoreNLP;
