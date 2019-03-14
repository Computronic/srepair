import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../../features/home/HomePage";
import OrderDashboard from "../../features/order/OrderDashboard/OrderDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import OrderDetailedPage from "../../features/order/OrderDetailed/OrderDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import OrderForm from "../../features/order/OrderForm/OrderForm";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <NavBar>
              <Switch>
                <Route path="/orders" component={OrderDashboard} />
                <Route path="/order/:id" component={OrderDetailedPage} />
                <Route path="/manage/order/:id" component={OrderForm} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createOrder" component={OrderForm} />
              </Switch>
            </NavBar>
          )}
        />
      </div>
    );
  }
}

export default App;
