import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application/Application';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
