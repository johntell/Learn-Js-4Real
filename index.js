import React from 'react';
import ReactDom from 'react-dom';

// main app
import App from './views/App';


const Element = <App extraValue="Hellooooooooooo" />;

ReactDom.render(Element, document.getElementById('app'));