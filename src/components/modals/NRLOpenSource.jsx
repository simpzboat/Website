import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";

import nrlImage from '../../images/NRL/nrl_open_source.png';

const NRLOpenSource = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const class_text = "NRL Data Scraper";

    const handleSubmit = () => {
        handleShow();
    };

    return (
        <>
            <div className="col-sm">
                <CardTile
                    photo={nrlImage}
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
                            I created a Python-based NRL data scraping system that collects and structures data from public sources for competitions including NRL, NRLW, HOSTPLUS, and KNOCKON, covering seasons from 2001 to 2024. The scraper automatically pulls match statistics, player performance, and detailed data summaries for each season. Before the tool was created there was no open source repository for NRL data.
                        </p>
                        <p>
                            I structured the output into JSON files organised by competition and year, and added support for real-time write operations, file overwrites, and consistent formatting to support downstream analysis.
                        </p>
                        <p>
                            This project acts as the backend for predictive modelling tasks, including try-scoring likelihood and team comparison tools, and integrates with front-end visualisation tools I’m building separately.
                        </p>

                        <h4 className="font-weight-light">Links</h4>
                        <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                        <ul>
                            <li>
                                <a href="https://github.com/beauhobba/NRL-Data" target="_blank" rel="noopener noreferrer">
                                    GitHub Repository
                                </a>
                            </li>
                            <li>
                                <a href="https://nrlpredictions.net/sport" target="_blank" rel="noopener noreferrer">
                                    Live Website
                                </a>
                            </li>
                        </ul>


                    </div>
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        </>
    );
};


export default NRLOpenSource;
