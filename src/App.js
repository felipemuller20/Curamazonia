import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Desmatamento from './pages/Desmatamento';
import Doar from './pages/Doar';
import FaunaFlora from './pages/FaunaFlora';
import ArvoresNativas from './pages/ArvoresNativas';
import RedirectTo from './pages/RedirectTo';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ RedirectTo } />
        <Route exact path='/Curamazonia' component={ About } />
        <Route exact path='/desmatamento' component={ Desmatamento } />
        <Route exact path='/doar' component={ Doar } />
        <Route exact path='/fauna-e-flora' component={ FaunaFlora } />
        <Route exact path='/arvores-nativas' component={ ArvoresNativas } />
      </Switch>
    </div>
  );
}

export default App;
