import React, { useState } from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";

const AnimalPost = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCardClick = () => handleShow();

  // *** Construct the text for the CardTile ***
  const getCardText = () => {
    const sciName = props.scientific_name;
    const commonName = props.animal_name;

    // Check if scientific name is valid/known
    const hasSciName = sciName && sciName !== 'Unknown Scientific Name';
    // Check if common name is valid/known
    const hasCommonName = commonName && commonName !== 'Unknown Common Name';

    if (hasSciName && hasCommonName) {
      // Format as: Scientific Name (Common Name) - Italicize scientific name
      // Note: Passing JSX to 'text' might not work depending on CardTile implementation.
      // If it fails, pass a plain string and style within CardTile if possible.
      // Let's try passing JSX first. If CardTile expects a string, create a plain string instead.
      return (
        <>
          <i>{sciName}</i> ({commonName})
        </>
      );
      // Alternative (if CardTile needs a string): return `${sciName} (${commonName})`;
    } else if (hasSciName) {
      // Only scientific name known
      return <i>{sciName}</i>;
      // Alternative (string): return sciName;
    } else if (hasCommonName) {
      // Only common name known
      return commonName;
    } else {
      // Fallback if neither is known (should be rare)
      return "Unknown Species";
    }
  };


  return (
    <>
      <CardTile
        photo={props.animal_photo}
        // *** Use the new function to generate text ***
        text={getCardText()}
        event={handleCardClick}
      />
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
            {/* Modal Title still uses Common Name for readability */}
            <Modal.Title as="h1" className="font-weight-light w-100 text-center">
                {props.animal_name}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="text-center mb-3">
                <img
                    src={props.animal_photo}
                    alt={props.animal_name}
                    className="img-fluid rounded"
                    style={{ maxHeight: '400px' }}
                />
            </div>
            <div className="font-weight-light">
                <h4 className="font-weight-light">Details</h4>
                {/* Display both names clearly in the details */}
                Scientific Name: <i>{props.scientific_name}</i>
                <br />
                Common Name: {props.animal_name}
                <br />
                Located: <i>{props.latitude}</i>, <i>{props.longitude}</i>
                <br />
                Observed: <i>{props.date}</i>
                <br />
                Location Name: <i>{props.location_name}</i>
                <br />
                {props.inat_url && props.inat_url !== '#' && (
                     <>
                        <a href={props.inat_url} target="_blank" rel="noopener noreferrer">View on iNaturalist</a>
                        <br />
                     </>
                )}
                <br />
                <h4 className="font-weight-light">Description</h4>
                <hr />
                {props.description}
                <br />
                <br />
                <hr />
            </div>
        </Modal.Body>
        <Modal.Footer>
             <button className="btn btn-secondary" onClick={handleClose}>
                 Close
             </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AnimalPost;