import logo from './logo.svg';
import './App.css';
import Homepage from './screens/homepage.js';
import Nav from './components/nav';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />

      <Route path="/">
        <Homepage />
      </Route>
      
    </div>
  );
}

export default App;
