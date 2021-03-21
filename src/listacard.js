import React from 'react';
import { CardColumns } from 'react-bootstrap';
import Planta from './cardplante';
import Vietate from './cardvietati';

const ListaCarduri = (props) => {
    const { listaPlante, listaVietati, editeaza, sterge, stergev, editeazav } = props;
    const listaP = listaPlante.map((item) => (
        <Planta
            src={item.src}
            nume={item.nume}
            tara={item.tara}
            inaltime={item.inaltime}
            temperatura={item.temperatura}
            cantitate={item.cantitate}
            loc={item.loc}
            id={item.id}
            key={item.id}
            sterge={sterge}
            editeaza={editeaza}
        />
    ));
    const listaV = listaVietati.map((item) => (
        <Vietate
            src={item.src}
            tip={item.tip}
            nume={item.nume}
            tara={item.tara}
            temperatura={item.temperatura}
            dimensiune={item.dimensiune}
            numar={item.numar}
            id={item.id}
            key={item.id}
            stergev={stergev}
            editeazav={editeazav}
        />
    ));
    return (
        <CardColumns>
            {listaP}
            {listaV}
        </CardColumns>
    )
};

export default ListaCarduri;