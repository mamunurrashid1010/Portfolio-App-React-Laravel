import logo from './logo.svg';
// import './App.css';
import '../src/asset/css/bootstrap.min.css'
import '../src/asset/css/custom.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './route/AppRouter';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;
