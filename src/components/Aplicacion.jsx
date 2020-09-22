import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InsigniaPages from "../pages/InsigniaPages";
import InsigniaNueva from "../pages/InsigniaNueva";
import Layout from "./Layout";

function Aplicacion() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/insignia" component={InsigniaPages} />
        <Route exact path="/insignia/new" component={InsigniaNueva} />
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Aplicacion;
