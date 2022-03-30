import ReactDOM from 'react-dom'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import 'flowbite';
import App from './App';


ReactDOM.render(<div>
  <BrowserRouter><App /></BrowserRouter>
</div>, document.querySelector('#root'));