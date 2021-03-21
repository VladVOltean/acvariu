import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';


const Adaugvietati = (props) => {
    const [id, setId] = useState(props.obeditv.id);
    const [src, setSrc] = useState(props.obeditv.src);
    const [tip, setTip] = useState(props.obeditv.tip);
    const [nume, setNume] = useState(props.obeditv.nume);
    const [tara, setTara] = useState(props.obeditv.tara);
    const [dimensiune, setD] = useState(props.obeditv.dimensiune);
    const [temperatura, setT] = useState(props.obeditv.temperatura);
    const [numar, setNumar] = useState(props.obeditv.numar);

    const tratezSubmit = (evt) => {
        evt.preventDefault();
        alert(`S-au adaugat in acvariu ${numar} ${tip}:\n${nume}`);
        const cardul = { src, tip, nume, tara, dimensiune, temperatura, numar, id };
        if (id > 0) {
            props.editezv(cardul);
        }
        else {
            props.transmitv(cardul);
        }
        setSrc("");
        setTip("");
        setNume("");
        setTara("");
        setD("");
        setT("");
        setNumar("");
        setId(0);
    };
    const stil = {
        marginTop: "2rem",
        backgroundColor: "#ddd",
        padding: "20px",
        width: "750px",
    }
    return (
        <>
            <h2>
                {id > 0 ? "Editează card" : "Adaugă viețuitoare"}
            </h2>
            <hr />
            <Container style={stil}>
                <Form onSubmit={tratezSubmit}>
                    <Form.Group>

                        <Form.Label>
                            Categorie viețuitoare:
                        </Form.Label>

                        <Form.Check
                            type="radio"
                            label="Pești"
                            name="radiob"
                            checked={tip === 'Pești'}
                            value="Pești"
                            onClick={() => setTip('Pești')}
                        />

                        <Form.Check
                            type="radio"
                            label="Melci"
                            name="radiob"
                            checked={tip === 'Melci'}
                            value="Melci"
                            onClick={() => setTip('Melci')}
                        />

                        <Form.Check
                            type="radio"
                            label="Creveți"
                            name="radiob"
                            checked={tip === 'Creveți'}
                            value="Creveți"
                            onClick={() => setTip('Creveți')}

                        />

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Denumire viețuitoare: </Form.Label>
                        <Form.Control type="text" value={nume}
                            onChange={e => setNume(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Fisierul imagine: </Form.Label>
                        <Form.Control type="text" value={src}
                            onChange={e => setSrc(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Țara de origine:</Form.Label>
                        <Form.Control type="text" value={tara}
                            onChange={e => setTara(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Dimensiunea maximă:</Form.Label>
                        <Form.Control type="text" value={dimensiune}
                            onChange={e => setD(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Interval temperatură recomandat:</Form.Label>
                        <Form.Control type="text" value={temperatura}
                            onChange={e => setT(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Numar {tip} adaugați:</Form.Label>
                        <Form.Control type="text" value={numar}
                            onChange={e => setNumar(e.target.value)} />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Adaugă
                </Button>

                </Form>
            </Container >
        </>
    );
}

export default Adaugvietati;