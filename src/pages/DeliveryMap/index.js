import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';
import Header from '../../components/Header';
import MapComponent from '../../components/MapComponent';

export default function DeliveryMap() {
  const delivery = JSON.parse(localStorage.getItem('delivery'));
  useEffect(() => {

  }, [delivery]);
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
      {delivery ? (
        <MapComponent
          from={delivery.startAddress}
          to={delivery.destinationAddress}
        />
      ) : <h4 className="center" style={{ marginTop: '60px' }}>Entrega não selecionada na lista</h4>}
    </div>
  );
}
