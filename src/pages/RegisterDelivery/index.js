import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, DatePicker, Button, TextInput } from 'react-materialize';
import moment from 'moment';

import api from '../../services/api';
import './styles.css';

import Header from '../../components/Header';

import truckLogo from '../../assets/truck-logo.png';
const dateFormat = 'DD/MM/YYYY';
export default function RegisterDelivery() {
  const [customer, setCustomer] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [startAddress, setStartAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [errors, setErrors] = useState({});
  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      customer,
      deliveryDate,
      startAddress,
      destinationAddress
    }

    try {
      await api.post('deliveries', data)
        .then(response => {
          alert('Entrega cadastrada com sucesso!');
          setCustomer('');
          setDeliveryDate('');
          setStartAddress('');
          setDestinationAddress('');
        })
        .catch(error => {
          if (error.response.status === 400) {
            alert(`Existem campos não preenchidos corretamente`);
            //setErrors({ ...res.error.response.fields })
            let fieldErrors = {}
            error.response.data.fields.forEach(element => {
              fieldErrors[element] = true
            });
            setErrors(fieldErrors);
          } else {
            throw new Error();
          }
        });
    } catch (error) {
      console.log(error);
      alert('Ocorreu um erro no cadastro, tente novamente.');
    }
  }
  function handleDateChange(target) {
    setDeliveryDate(
      moment(target.value).format(dateFormat)
    )
    let fieldErrors = errors;
    fieldErrors[target.id] = '';
    setErrors(fieldErrors);
  }

  return (
    <div>
      <Header>
        <Link className="left" to="/entregas">
          <Button
            node="button"
            waves="teal"
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
              <form onSubmit={handleRegister}>
                <Row>
                  <Col s={12} m={9}>
                    <TextInput
                      className={errors.customer && 'validate invalid'}
                      id="customer"
                      label="Nome do cliente"
                      s={12}
                      value={customer}
                      validate
                      error="Nome inválido"
                      onChange={e => setCustomer(e.target.value)}
                      minLength={3}
                    />
                  </Col>
                  <Col s={12} m={3}>
                    <DatePicker
                      className={errors.deliveryDate && 'invalid'}
                      id="deliveryDate"
                      options={datePickerOptions}
                      label="Data de entrega"
                      error="Data Inválida"
                      s={12}
                      value={deliveryDate}
                      onChange={newDeliveryDate => handleDateChange({
                        id: "deliveryDate",
                        value: newDeliveryDate
                      })}
                    />
                  </Col>
                  <Col s={12}>
                    <TextInput
                      className={errors.startAddress && 'invalid'}
                      id="startAddress"
                      label="Endereço de partida"
                      error="Endereço inválido"
                      s={12}
                      value={startAddress}
                      onChange={e => setStartAddress(e.target.value)}
                      minLength={5}
                    />
                  </Col>
                  <Col s={12}>
                    <TextInput
                      className={errors.destinationAddress && 'invalid'}
                      id="destinationAddress"
                      label="Endereço de destino"
                      error="Endereço inválido"
                      s={12}
                      value={destinationAddress}
                      onChange={e => setDestinationAddress(e.target.value)}
                      minLength={5}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col s={12}>
                    <Col s={10} m={6}>
                      <Link className="default-link left" to="/entregas">
                        <Button
                          node="button"
                          waves="light"
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