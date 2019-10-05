import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Aptekif from './components/apteki'
import Homef from './components/home'
import Zoomapf from './components/zoomap'
import Clubf from './components/club'
import Shopf from './components/shop'
import Shelterf from './components/shelter'
import Vistavkaf from './components/vistavka'
import Avtomatf from './components/avtomat'


function App() {
  return (
    <div className="top">
<Router>
      <div className="menu">
        <nav className="nav">
          <ul className="nav-ul">
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/zoomap">Місця вигулу</Link>
            </li>
            <li>
              <Link to="/avtomat">Автомати з спец. пакетами</Link>
            </li>
            <li>
              <Link to="/apteki">Вет Лікарні</Link>
            </li>
            <li>
              <Link to="/club">Клуби</Link>
            </li>
            <li>
              <Link to="/vistavki">Виставки</Link>
            </li>
            <li>
              <Link to="/shop">ЗооМагазини</Link>
            </li>
            <li>
              <Link to="/shelter">ЗооЗахист</Link>
            </li>
            
          </ul>
        </nav>

        <Switch>
          <Route path="/apteki">
            <Aptekif />
          </Route>
          <Route path="/club">
            <Clubf />
          </Route>
          <Route path="/zoomap">
            <Zoomapf />
          </Route>
          <Route path="/shop">
            <Shopf />
          </Route>
          <Route path="/shelter">
            <Shelterf />
          </Route>
          <Route path="/avtomat">
            <Avtomatf />
          </Route>
          <Route path="/vistavki">
            <Vistavkaf />
          </Route>
          <Route path="/">
            <Homef />
          </Route>
          
          
        </Switch>
      </div>
    </Router>

    <a href="#" title="Вернуться к началу" class="topbutton">Вгору</a>

      </div>

  )
}

export default App;
