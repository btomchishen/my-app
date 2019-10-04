import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Aptekif from './components/apteki'
import Homef from './components/home'
import Zoomapf from './components/zoomap'
import Clubf from './components/club'
import Shopf from './components/shop'
import Shelterf from './components/shelter'
import Hospitalf from './components/hospital'
import Areaf from './components/area'
import Vistavkif from './components/vistavka'
import Avtomatf from './components/avtomat'


/*function Home() {
  return <Homef />;
}

function Apteki() {
  return <Aptekif />;
}

function Zoomap() {
  return <Zoomapf />;
}

function Shelter() {
  return <Shelterf />;
}

function Hospital() {
  return <Hospitalf />;
}

function Club() {
  return <Clubf />;
}

function Vistavki() {
  return <Vistavkif />;
}

function Area() {
  return <Areaf />;
}

function Avtomat() {
  return <Avtomatf />;
}

function Shop() {
  return <Shopf />;
}*/

function App() {
  return (

<Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/apteki">Вет Аптеки</Link>
            </li>
            <li>
              <Link to="/zoomap">ЗооКарта</Link>
            </li>
            
            <li>
              <Link to="/hospital">Вет Лікарні</Link>
            </li>
            <li>
              <Link to="/area">Тренувальні майданчики</Link>
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
              <Link to="/shelter">Притулки</Link>
            </li>
            <li>
              <Link to="/avtomat">Автомати видачі пакетів</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/apteki">
            <Aptekif />
          </Route>
          <Route path="/hospital">
            <Hospitalf />
          </Route>
          <Route path="/area">
            <Areaf />
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
            <Vistavkif />
          </Route>
          <Route path="/">
            <Homef />
          </Route>
          
          
        </Switch>
      </div>
    </Router>
      
      

  );
}

export default App;
