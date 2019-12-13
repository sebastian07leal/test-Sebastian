import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
/** Se importan los estilos generales para todo el  body*/
import './assets/styles/App.scss'
/**Renderiza todos los componentes  en la ruta del html ubicado en public*/
ReactDOM.render(<App />,document.getElementById('app')
);