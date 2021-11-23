require('./bootstrap');

import ReactDOM from 'react-dom';
import App from "./components/App";
import '../css/app.css';

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
