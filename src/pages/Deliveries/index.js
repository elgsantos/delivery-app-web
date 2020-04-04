import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Card, Row, Col } from 'react-materialize';

import './styles.css';

import Header from '../../components/Header';

export default function Deliveries({ history }) {
  const handleRowClick = () => {
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
                <tr title="Clique para ver no mapa"
                  onClick={handleRowClick}>
                  <td>
                    Alvin Eclair
                  </td>
                  <td>
                    27/05/2019
                  </td>
                  <td className="cell-from">
                    Rua almirante teffé
                  </td>
                  <td className="cell-to">
                    Av. Amaral Peixoto, 10 - Niterói
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  );
}