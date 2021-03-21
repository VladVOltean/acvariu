import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';


const Adaugplante = (props) => {
    const [id, setId] = useState(props.obedit.id);
    const [src, setSrc] = useState(props.obedit.src);
    const [nume, setNume] = useState(props.obedit.nume);
    const [tara, setTara] = useState(props.obedit.tara);
    const [inaltime, setH] = useState(props.obedit.inaltime);
    const [temperatura, setT] = useState(props.obedit.temperatura);
    const [cantitate, setNr] = useState(props.obedit.cantitate);
    const [loc, setLoc] = useState(props.obedit.loc);

    const tratezSubmit = (evt) => {
        evt.preventDefault();
        alert(`S-au adăugat in acvariu ${cantitate} plante:\n${nume}\n amplasate \n ${loc}`);
        const cardul = { src, nume, tara, inaltime, temperatura, cantitate, loc, id };
        if (id > 0) {
            props.editez(cardul);
        }
        else {
            props.transmit(cardul);
        }
        setSrc("");
        setNume("");
        setTara("");
        setH("");
        setT("");
        setNr("");
        setLoc("");
        setId(0);
    };
    const cont = {
        marginTop: "2rem",
        backgroundColor: "#ddd",
        padding: "20px",
        width: "750px",
    }
    return (
        <>
            <h2>
                {id > 0 ? "Editează card" : "Adaugă plante"}
            </h2>
            <hr />
            <Container style={cont}>
                <Form onSubmit={tratezSubmit}>
                    <Form.Group>
                        <Form.Label>Denumire plantă: </Form.Label>
                        <Form.Control type="text" value={nume}
                            onChange={e => setNume(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Fișierul imagine: </Form.Label>
                        <Form.Control type="text" value={src}
                            onChange={e => setSrc(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Țara de origine:</Form.Label>
                        <Form.Control type="text" value={tara}
                            onChange={e => setTara(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Inălțime maximă:</Form.Label>
                        <Form.Control type="text" value={inaltime}
                            onChange={e => setH(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Interval temperatură recomandat:</Form.Label>
                        <Form.Control type="text" value={temperatura}
                            onChange={e => setT(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Număr plante adăugate:</Form.Label>
                        <Form.Control type="text" value={cantitate}
                            onChange={e => setNr(e.target.value)} />
                    </Form.Group>

                    <Form.Group>

                        <Form.Label>
                            Locație amplasare:
      </Form.Label>

                        <Form.Check
                            type="radio"
                            label="Frontal"
                            name="radiob"
                            checked={loc === 'Frontal'}
                            value="Frontal"
                            onClick={() => setLoc('Frontal')}
                        />

                        <Form.Check
                            type="radio"
                            label="Median"
                            name="radiob"
                            checked={loc === 'Median'}
                            value="Median"
                            onClick={() => setLoc('Median')}
                        />

                        <Form.Check
                            type="radio"
                            label="Fundal"
                            name="radiob"
                            checked={loc === 'Fundal'}
                            value="Fundal"
                            onClick={() => setLoc('Fundal')}

                        />

                    </Form.Group>

                    <Button variant="success" type="submit">
                        Adaugă
                </Button>

                </Form>
            </Container >
        </>
    );
}

export default Adaugplante;