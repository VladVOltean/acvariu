import React from 'react';
import { Card, Button, CardColumns } from "react-bootstrap";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const Vietate = (props) => {
    const { src, tip, nume, tara, temperatura, dimensiune, numar, editeazav, stergev, id } = props;

    const stil = {
        svg: {
            pointerEvents: "none"
        }
    };
    const card_width = { maxWidth: "286px" };
    return (
        <div className="home">
            <CardColumns>
                <Card style={card_width} >
                    <Card.Img variant="top" src={`imagini/${src}`} />
                    <Card.Body>
                        <Card.Title>{nume}</Card.Title>
                        <Card.Text>
                            <p>Țara de origine: {tara}</p>
                            <p>Temperatura optimă: {temperatura} <span>&#176;</span>C</p>
                            <p>Dimensiunea maximă: {dimensiune} cm</p>
                            <p>Număr viețuitoare: {numar}</p>
                        </Card.Text>
                        <Button variant="success" id={id} onClick={() => editeazav(id)} style={stil}>
                            <FiEdit2 />
                        </Button>
                        <Button variant="success float-right" id={id} onClick={() => stergev(id)} style={stil}>
                            <FiTrash2 />
                        </Button>
                    </Card.Body >
                    <Card.Footer>
                        <small className="text-muted"> Categorie viețuitoare: {tip}</small>
                    </Card.Footer>
                </Card >
            </CardColumns>
        </div>
    );
};

export default Vietate;