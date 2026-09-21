import React, {Text, useEffect} from "react";
import CardTile from "../cards/CardTile"
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { isMobile } from "react-device-detect";
import ReactPlayer from "react-player";


import { image_library, video_library } from "./media";



const images = [
    {
      original: image_library.deepracer_1,
      thumbnail: image_library.deepracer_1,
    },
    {
      original: image_library.deepracer_2,
      thumbnail: image_library.deepracer_2,
    },
  ];

const Deepracer = () => {
    const [show, setShow] = React.useState(false);

    const [mobile, setMobile] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (isMobile) {
            setMobile(true);
        }
    }, []);
  
    const class_text = "Deepracer"

    const handleSubmit = (e) => {
      handleShow();
    };

    return(
    <><div class="col-sm">
        <CardTile
            photo={image_library.deepracer_title}
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
                    Deepracer is an AWS challenge which involves racing simulated vehicles. These vehicles are trained to move using an reinforcement neural network. I was able to progress to the prefessional division by coming in the top 10% of the pool. This challenege involved using AWS services, performing reinforcement learning and learning a lot about vehicle mechnics. In order to rank so highly I optimised the vehicle for the race track, ensuring the vehicle's reinforcement learning was based on slowing down at corners and gunning it during straights.
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <h4 class="font-weight-light">
                                            Media
                                        </h4>
                                        <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                  <ReactPlayer url={video_library.deepracer_video}  controls width="100%" />
                                </div>
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

export default Deepracer
