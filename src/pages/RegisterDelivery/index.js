import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, DatePicker, Button, TextInput } from 'react-materialize';

import './styles.css';

import Header from '../../components/Header';

import truckLogo from '../../assets/truck-logo.png';

export default function RegisterDelivery() {
  return (
    <div>
      <Header>
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
      <div className="register-container container">
        <Row>
          <Col s={6}>
            <h4 className="teal-text">Entregas</h4>
            <h5 className="subtitle deep-orange-text">WEB APP</h5>
          </Col>
          <Col s={6}>
            <img src={truckLogo} alt="Entregas" width="180" />
          </Col>
        </Row>
        <Row>
          <Col s={12} l={10} offset={'l1'}>
            <Card title="Cadastrar nova entrega" className="center grey-text text-darken-2">
              <form>
                <Row>
                  <Col s={12} m={9}>
                    <TextInput
                      id="customer"
                      label="Nome do cliente"
                      s={12}
                    />
                  </Col>
                  <Col s={12} m={3}>
                    <DatePicker
                      id="deliveryDate"
                      className="date-picker-delivery"
                      options={datePickerOptions}
                      label="Data de entrega"
                      s={12}
                    />
                  </Col>
                  <Col s={12}>
                    <TextInput
                      id="startAddress"
                      label="Endereço de partida"
                      s={12}
                    />
                  </Col>
                  <Col s={12}>
                    <TextInput
                      id="destinationAddress"
                      label="Endereço de destino"
                      s={12}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col s={12}>
                    <Col s={10} m={6}>
                      <Link className="default-link left" to="/entregas">
                        <Button
                          node="button"
                          waves="dark"
                          className="left white deep-orange-text"
                        >
                          Lista de entregas
                        </Button>
                      </Link>
                    </Col>
                    <Col s={2} m={6}>
                      <Button
                        node="button"
                        type="submit"
                        waves="light"
                        className="right"
                      >
                        Cadastrar
                      </Button>
                    </Col>
                  </Col>
                </Row>
              </form>
            </Card>
          </Col>
        </Row >
      </div >
    </div>
  );
}
const datePickerOptions = {
  events: [],
  firstDay: 0,
  format: 'dd/mm/yyyy',
  i18n: {
    cancel: 'Cancelar',
    clear: 'Limpar',
    done: 'Ok',
    months: ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set',
      'Out', 'Nov', 'Dez'],
    nextMonth: '›',
    previousMonth: '‹',
    weekdays: ['Domingo', 'Segunda-Feira', 'Terca-Feira', 'Quarta-Feira',
      'Quinta-Feira', 'Sexta-Feira', 'Sabado'],
    weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
  },
  yearRange: 20
};