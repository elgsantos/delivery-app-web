import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RegisterDelivery from './pages/RegisterDelivery';
import Deliveries from './pages/Deliveries';
import DeliveryMap from './pages/DeliveryMap';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RegisterDelivery} />
        <Route path="/entregas/rota" component={DeliveryMap} />
        <Route path="/entregas" component={Deliveries} />
      </Switch>
    </BrowserRouter>
  );
}