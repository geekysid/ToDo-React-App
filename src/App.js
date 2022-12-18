import './Style.css';
import ToDo from './components/ToDo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <div className="todo">
        <ToDo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
