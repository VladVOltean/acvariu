import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Adaugplante from './adaugaplante';
import Adaugvietati from './adaugavietati';
import { Route, Switch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ListaCarduri from './listacard';
import { GiCirclingFish } from "react-icons/gi";


function App() {
  const [listaV, setListaV] = useState([]);
  const [reafV, setReafV] = useState(false);
  const [editV, setEditV] = useState({});
  const [formV, setFormV] = useState(false);
  const [listaP, setListaP] = useState([]);
  const [reafP, setReafP] = useState(false);
  const [editP, setEditP] = useState({});
  const [form, setForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:80/acvariu/plante.php")
      .then((rezultat) => rezultat.text())
      .then((rezultat) => JSON.parse(rezultat))
      .then((sirplante) => setListaP(sirplante));
  }, [reafP]);
  useEffect(() => {
    fetch("http://localhost:80/acvariu/vietati.php")
      .then((rezultat) => rezultat.text())
      .then((rezultat) => JSON.parse(rezultat))
      .then((sirvietati) => setListaV(sirvietati));
  }, [reafV]);

  const history = useHistory();
  useEffect(() => {
    if (form === true) {
      history.push("/plante");
    }
  }, [history, form]);
  const historyV = useHistory();
  useEffect(() => {
    if (formV === true) {
      historyV.push("/vietati");
    }
  }, [historyV, formV]);

  const sterg = (id) => {
    const dateScript = JSON.stringify({ id: parseInt(id, 10) });
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };
    fetch("http://localhost:80/acvariu/plante.php", config).then(() => {
      setListaP([]);
      setReafP(!reafP);
    });
    fetch("http://localhost:80/acvariu/vietati.php", config).then(() => {
      setListaV([]);
      setReafV(!reafV);
    });
  };

  const adaugplante = (el) => {
    const dateScript = JSON.stringify({
      src: el.src,
      nume: el.nume,
      tara: el.tara,
      inaltime: el.inaltime,
      temperatura: el.temperatura,
      cantitate: el.cantitate,
      loc: el.loc
    });
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };

    fetch("http://localhost:80/acvariu/plante.php", config).then(() => {
      setListaP([]);
      setReafP(!reafP);
    });
  };
  const adaugvietati = (el) => {
    const dateScript = JSON.stringify({
      src: el.src,
      tip: el.tip,
      nume: el.nume,
      tara: el.tara,
      dimensiune: el.dimensiune,
      temperatura: el.temperatura,
      numar: el.numar
    });
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };

    fetch("http://localhost:80/acvariu/vietati.php", config).then(() => {
      setListaV([]);
      setReafV(!reafV);
    });
  };

  const editezCardplante = (id) => {
    var obiect = listaP.find((item) => {
      return parseInt(item.id, 10) === parseInt(id, 10);
    });
    if (obiect) {
      setEditP({
        ...editP,
        id: obiect.id,
        src: obiect.src,
        nume: obiect.nume,
        tara: obiect.tara,
        inaltime: obiect.inaltime,
        temperatura: obiect.temperatura,
        cantitate: obiect.cantitate,
        loc: obiect.loc
      });
      setForm(true);
    }
  };
  const editezCardvietati = (id) => {
    var obiect = listaV.find((item) => {
      return parseInt(item.id, 10) === parseInt(id, 10);
    });
    if (obiect) {
      setEditV({
        ...editV,
        id: obiect.id,
        tip: obiect.tip,
        src: obiect.src,
        nume: obiect.nume,
        tara: obiect.tara,
        dimensiune: obiect.dimensiune,
        temperatura: obiect.temperatura,
        numar: obiect.numar
      });
      setFormV(true);
    }
  };

  const editFormPlante = (act) => {
    console.log(`editFormPlante, act.loc: ${act.loc}`);
    const dateScript = JSON.stringify({
      id: act.id,
      src: act.src,
      nume: act.nume,
      tara: act.tara,
      inaltime: act.inaltime,
      temperatura: act.temperatura,
      cantitate: act.cantitate,
      loc: act.loc
    });
    const config = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };


    fetch("http://localhost:80/acvariu/plante.php", config).then(() => {
      setListaP([]);
      setReafP(!reafP);
    });
    setForm(false);

    setEditP({
      ...editP,
      id: 0,
      src: "",
      nume: "",
      tara: "",
      inaltime: "",
      temperatura: "",
      cantitate: "",
      loc: ""
    });
  };
  const editFormVietati = (act) => {
    console.log(`editFormVietati, act.tip: ${act.tip}`);
    const dateScript = JSON.stringify({
      id: act.id,
      tip: act.tip,
      src: act.src,
      nume: act.nume,
      tara: act.tara,
      dimensiune: act.dimensiune,
      temperatura: act.temperatura,
      numar: act.numar,
    });
    const config = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };

    fetch("http://localhost:80/acvariu/vietati.php", config).then(() => {
      setListaV([]);
      setReafV(!reafV);
    });
    setFormV(false);

    setEditV({
      ...editV,
      id: 0,
      src: "",
      tip: "",
      nume: "",
      tara: "",
      dimensiune: "",
      temperatura: "",
      numar: ""
    });
  };
  return (
    <Container>
      <Navbar bg="success" variant="dark" expand="lg">
        <Navbar.Brand href="#home"><GiCirclingFish size={30} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Acvariu
           </Nav.Link>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/plante">
                Adaugă plante
            </Nav.Link>
              <Nav.Link as={Link} to="/vietati">
                Adaugă viețuitoare
            </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <ListaCarduri
            listaPlante={listaP}
            sterge={sterg}
            editeaza={editezCardplante}
            listaVietati={listaV}
            stergev={sterg}
            editeazav={editezCardvietati}
          />
        </Route>
        <Route path="/plante">
          <Adaugplante transmit={adaugplante} editez={editFormPlante} obedit={editP} />
        </Route>
        <Route path="/vietati">
          <Adaugvietati transmitv={adaugvietati} editezv={editFormVietati} obeditv={editV} />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
