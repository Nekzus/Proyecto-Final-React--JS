import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const divRoot = document.getElementById('root');

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, divRoot );