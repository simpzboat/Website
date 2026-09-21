import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";

// Replace with a relevant image or testing site photo
import chippendaleImage from '../../images/Chippendale/chippendale.png';

const ChippendaleCITS = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const class_text = "Chippendale C-ITS Project";

    const handleSubmit = () => {
        handleShow();
    };

    return (
        <>
            <div className="col-sm">
                <CardTile
                    photo={chippendaleImage}
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

                        <h4 className="font-weight-light">My Contributions</h4>
                        <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />

                        <p>
                            I led the planning, execution, and reporting of the C-ITS test program at Chippendale in collaboration with SCATS and the Australian Centre for Field Robotics (ACFR). The testing validated advanced connected vehicle warning systems, including Red Light Violation Warning (RLVW), Time to Green Warning (TTGW), and Pedestrian Turn Warning (PTW).
                        </p>
                        <p>
                            I oversaw the entire process from infrastructure setup and stakeholder coordination to real-time scenario execution and post-test data analysis. This involved managing communication across multiple agencies, developing the test matrix, running high-precision collision simulations, and providing final reporting to stakeholders.
                        </p>
                        <p>
                            The project helped position FMTRC as a national leader in real-world C-ITS testing and future mobility research, creating a replicable testbed model for similar deployments.
                        </p>


                    </div>
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        </>
    );
};

export default ChippendaleCITS;
