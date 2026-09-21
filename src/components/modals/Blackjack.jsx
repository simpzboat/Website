import React, {useEffect} from "react";
import CardTile from "../cards/CardTile"
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import {isMobile } from "react-device-detect";

import BlackjackImg from "../../images/blackjack.png"

import BlackjackImg1 from "../../images/blackjack/card_counter_1.png"
import BlackjackImg2 from "../../images/blackjack/card_counter_2.png"
import BlackjackImg3 from "../../images/blackjack/card_counter_3.png"
import ImageGallery from 'react-image-gallery';
import ShuffleboardImg from "../../images/shuffleboardcv.png"


const images = [
    {
      original: BlackjackImg1,
      thumbnail: BlackjackImg1,
    },
    {
      original: BlackjackImg2,
      thumbnail: BlackjackImg2,
    },
    {
      original: BlackjackImg3,
      thumbnail: BlackjackImg3,
    }
  ];



const Blackjack = () => {
    const [show, setShow] = React.useState(false);
    const [mobile, setMobile] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const class_text = "Blackjack Assistant"

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
            photo={BlackjackImg}
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
                    Developed a computer vision system to monitor Blackjack gameplay for signs of card counting. Leveraged computer vision techniques, machine learning, and synthetic dataset generation to detect chip height and classify cards. Implemented augmented reality for real-time game analysis. AWS EC2s were used to speed up the training process.
                    <br>
                    </br>
                    <div style={{ justifyItems: "center", display: 'flex', alignContent: 'center', alignItems: 'center', width: '50%' }}>
            </div>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <h4 class="font-weight-light">
                        Gallery
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <ImageGallery items={images} />



                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Blackjack