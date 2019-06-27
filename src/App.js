import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Heroes from './components/Heroes';
import AddHeroes from './components/add-Heroes';
import EditHeroes from './components/edit-Heroes';
import underlordsLogo from '../src/assets/underlordsLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>
          <a className='navbar-brand' href='blank' target='_blank'>
            <img src={underlordsLogo} width='100' height='50' alt='Underlord'/>
          </a>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='navbar-item'>
                <Link to='/' className='nav-link'>Heroes</Link>
              </li>
              <li className='navbar-item'>
              <Link to='/addHero' className='nav-link'>Add Hero</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Route path='/' exact component={Heroes}/>
        <Route path='/addHero' exact component={AddHeroes}/>
        <Route path='/edit/:id' exact component={EditHeroes}/>
      </div>
    </Router>
  );
}

export default App;
