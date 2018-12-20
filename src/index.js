import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

ReactDOM.render(
  <Layout>
    <Route exact path="/" component={Projects}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/contact" component={Contact}></Route>
  </Layout>,
  document.getElementById('root')
)