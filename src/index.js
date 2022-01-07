import React from 'react';
import ReactDOM from 'react-dom';

//Css
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

//Pages
/* import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges' */

//Components
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(
  <App />, 
  container
);




/* EJEMPLOS
import React from 'react';
import ReactDOM from 'react-dom';

//const jsx = <h1>Hello, Curso de React </h1>

//React.createElement('_tipoElemento', {Atributos}, 'children');
// const element = React.createElement(
//   'a', 
//   { href: 'https://platzi.com' }, 
//   'Ir a Platzi'
// );  
const name = "Rodrigo";
const sum = () => 3+3;
// const element = React.createElement(
//   'h1',
//   {},
//   `Hola, soy ${name}`
// );

//const jsx =  <h1> Hola, soy, {'_Expresiones'} </h1>;
//const jsx =  <h1> Hola, soy, {sum()} </h1>;
const jsx = <div>
  <h1> Hola, Soy {name} _ JSX</h1>
  <p> Soy Ingeniero Mecatrónico </p>
</div>;

const element = React.createElement(
  'div',
  {},
  React.createElement('h1',{}, `Hola, soy ${name} _ React`),
  React.createElement('p', {}, 'Soy ingeniero Mecatrónico')
);

const container = document.getElementById('app');

ReactDOM.render(jsx, container);


""react-router-dom":^6.2.1"
 */