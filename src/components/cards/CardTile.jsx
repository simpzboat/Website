import React from "react";
import Card from 'react-bootstrap/Card';

const CardTile = ({ event, photo, text }) => {
  return (
    <Card onClick={event} className="h-100 text-white">
      <Card.Img src={photo} alt="Card image" />
      <Card.ImgOverlay className="d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(90, 90, 90, 0.35)' }}>
        <Card.Title className="font-weight-light">{text}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CardTile;
