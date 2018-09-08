import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './theme/globalstyle';
import './containers/Home/Home.style';

ReactDOM.render(
routes, 
document.getElementById('root')
);
registerServiceWorker();
