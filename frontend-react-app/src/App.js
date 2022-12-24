import logo from './logo.svg';
// import './App.css';
import '../src/asset/css/bootstrap.min.css'
import TopBanner from './components/TopBanner/TopBanner';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
        <TopBanner/>
        <Services/>
    </div>
  );
}

export default App;
