import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';
import Header from '../../components/Header';
import MapComponent from '../../components/MapComponent';

export default function DeliveryMap() {
  return (
    <div>
      <Header>

        <Link className="left" to="/">
          <Button
            node="button"
            waves="light"
            className="right"
          >
            Cadastrar Entrega
          </Button>
        </Link>
        <Link className="left" to="/entregas">
          <Button
            node="button"
            waves="dark"
            className="right white teal-text"
          >
            Lista de Entregas
            </Button>
        </Link>
      </Header>
      <MapComponent
        from={{ lat: -22.8873196, lng: -43.1265972 }}
        to={{ lat: -22.9330791, lng: -43.0990986 }}
      />
    </div>
  );
}
