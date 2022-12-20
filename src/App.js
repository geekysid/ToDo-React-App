import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Style.css';

// import components
import ToDo from './components/ToDo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
        <div className="body">
        <Routes>
          <Route path="" element={ <ToDo /> }> </Route>
          <Route path="login" element={ <Login /> }> </Route>
          <Route path="signup" element={ <Signup /> }> </Route>
        </Routes>
        </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
