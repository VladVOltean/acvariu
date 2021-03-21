import React from 'react';
import { Card, Button } from "react-bootstrap";
import { FiEdit2, FiTrash2, } from "react-icons/fi";

const Planta = (props) => {
    const { src, nume, tara, inaltime, temperatura, cantitate, loc, editeaza, sterge, id } = props;

    const stil = {
        svg: {
            pointerEvents: "none"
        }
    };
    const card_width = { maxWidth: "286px" };
    return (

        <Card style={card_width} >
            <Card.Img variant="top" src={`imagini/${src}`} />
            <Card.Body>
                <Card.Title>{nume}</Card.Title>
                <Card.Text>
                    <p>Țara de origine: {tara}</p>
                    <p>Temperatură optimă: {temperatura} <span>&#176;</span>C</p>
                    <p>Inălțime maximă: {inaltime} cm</p>
                    <p>Număr plante adăugate: {cantitate}</p>
                </Card.Text>
                <Button variant="success" id={id} onClick={() => editeaza(id)} style={stil}>
                    <FiEdit2 />
                </Button>
                <Button variant="success float-right" id={id} onClick={() => sterge(id)} style={stil}>
                    <FiTrash2 />
                </Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted"> Amplasare: {loc}</small>
            </Card.Footer>
        </Card >
    );
};

export default Planta;