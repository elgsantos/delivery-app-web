import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Card, Row, Col, ProgressBar } from 'react-materialize';
import moment from 'moment';

import api from '../../services/api';
import './styles.css';

import Header from '../../components/Header';

export default function Deliveries({ history }) {
  const [deliveries, setDeliveries] = useState([]);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    api.get('deliveries')
      .then(response => {
        setDeliveries(response.data);
        setUpdated(true);
      })
  }, []);
  async function handleRowClick(delivery) {
    console.log(delivery);
    localStorage.setItem('delivery', JSON.stringify(delivery));
    history.push({
      pathname: '/entregas/rota'
    });
  }
  return (
    <div className="deliveries-container">
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
      </Header>

      <Row>
        <Col s={12} m={12} l={10} offset={'l1'}>
          <Card title="Lista de Entregas" className="center grey-text text-darken-2">
            {updated ? (
              <Table className="delivery-table">
                <thead>
                  <tr>
                    <th data-field="customer">
                      Nome do Cliente
                  </th>
                    <th data-field="deliveryDate">
                      Data Entrega
                  </th>
                    <th data-field="startAddress">
                      Endereço de Partida
                  </th>
                    <th data-field="destinationAddress">
                      Endereço de Destino
                  </th>
                  </tr>
                </thead>
                <tbody>
                  {deliveries.map(delivery => (
                    <tr key={delivery._id} title="Clique para ver no mapa"
                      onClick={() => handleRowClick(delivery)}>
                      <td>
                        {delivery.customer}
                      </td>
                      <td>
                        {moment(delivery.deliveryDate).format('DD/MM/YYYY')}
                      </td>
                      <td className="cell-from">
                        {delivery.startAddress}
                      </td>
                      <td className="cell-to">
                        {delivery.destinationAddress}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (<ProgressBar />)}
          </Card>
        </Col>
      </Row>
    </div>
  );
}