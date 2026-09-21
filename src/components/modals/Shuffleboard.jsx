import React, {useEffect} from "react";
import CardTile from "../cards/CardTile"
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import {isMobile } from "react-device-detect";

import openmap from '../../images/openmap.png'
import ShuffleboardImg from "../../images/shuffleboardcv.png"

const Shuffleboard = () => {
    const [show, setShow] = React.useState(false);
    const [mobile, setMobile] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const class_text = "Shuffleboard"

    const handleSubmit = (e) => {
      handleShow();
    };
    
    useEffect(() => {
        if (isMobile) {
          setMobile(true);
        }
      }, []);



    return(
    <><div class="col-sm">
        <CardTile
            photo={ShuffleboardImg}
            text={class_text}
            event={() => handleSubmit()} 
        />
        </div>
        <Modal show={show} onHide={handleClose} size={mobile ? null : "lg"} style={mobile ? {width: "80%"} : null} >
            {mobile ?
            <div onClick={handleClose} style={{justifyContent: 'flex-end', display: "flex", paddingRight: 10}}>
                <p style={{fontSize: 30,  marginTop: 0}}><b>x</b></p>
            </div>
            : null}

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
                    Collaborated with a colleague to develop a computer vision-based shuffleboard tracker. Our program accurately monitored scores for two players during a game. I focused on building the computer vision algorithm, while my co-worker developed an interactive React application. We integrated an Intel RealSense camera to track the shuffleboard pucks and included edge case rules, enabling the program to detect the end of each round.
                    <br>
                    </br>
                    <div style={{ justifyItems: "center", display: 'flex', alignContent: 'center', alignItems: 'center', width: '50%' }}>
            </div>
                    <br>
                    </br>
                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Shuffleboard