import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// Placeholder image (replace with a relevant PyChat image if available)
import pychatImage from '../../images/pychat.png';

// const images = [
//     {
//         original: pychatImage,
//         thumbnail: pychatImage,
//     },
// ];

const PyChat = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const class_text = "PyChat";

    const handleSubmit = () => {
        handleShow();
    };

    return (
        <>
            <div className="col-sm">
                <CardTile
                    photo={pychatImage}
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
                            I worked extensively on the development of PyChat, a natural language system for use within the Home AI platform. My first task was implementing text embeddings using Sentence Transformers, allowing paraphrases to be matched semantically for intelligent responses.
                        </p>

                        <p>
                            I added multiple machine learning models, including KNN, SVM, Naive Bayes, Decision Trees, Random Forest and Perceptron. These were benchmarked using accuracy, precision and F1 score, along with auto-generated ROC and confusion matrices to visualise performance.
                        </p>

                        <p>
                            To reduce retraining time, I implemented functionality to save and load models and embeddings using `.pkl` files. This helped streamline testing and allowed reuse of training parameters, which I referred to as “fast models”.
                        </p>

                        <p>
                            I also Dockerised PyChat to ensure it could run across different machines reliably. I resolved Docker networking and environment issues, which improved internal testing for other developers.
                        </p>

                        <p>
                            I designed and deployed a range of Flask API endpoints to allow Home AI to train, update, query and monitor the PyChat service. To address long training times, I threaded the application and added a status field (e.g. “training”, “ready”) to avoid interface blocking and improve system communication.
                        </p>

                        <p>
                            I added Sphinx documentation to the PyChat repository, and also developed a script to convert legacy data from IBM Watson, including handling unlinked IDs and removing duplicate paraphrases.
                        </p>

                        <p>
                            I began work on deep learning models using Keras (ResNet and VGG16), training these with sample data in Google Colab. I researched and tested appropriate loss functions and optimisers, and incorporated these into the training pipeline.
                        </p>

                        <p>
                            I also implemented data augmentation using NLTK for small class sets, balancing training input across under-represented phrases. In addition, I worked on improving data storage and memory efficiency, introducing .pkl-based systems for model parameters and preprocessed input data.
                        </p>


                        {/* <h4 className="font-weight-light">Gallery</h4>
                        <hr style={{ colour: "black", backgroundColour: "white", height: 5 }} />
                        <ImageGallery items={images} /> */}

                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PyChat;
