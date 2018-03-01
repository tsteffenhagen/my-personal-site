import React from 'react'
import {Route} from 'react-router'
import { HashRouter } from 'react-router-dom';

import App from './components/App';
import AboutPage from './components/AboutPage/AboutPage'
import ResumePage from './components/ResumePage/ResumePage'
import HomePage from './components/HomePage/HomePage'

export default class Router extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={App} />
          <Route path='/about' component={AboutPage}/>
          <Route path='/resume' component={ResumePage}/> 
        </div>
      </HashRouter>
      )
    } 
}