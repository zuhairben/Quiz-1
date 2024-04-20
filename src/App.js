import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignUp from './components/SignUp';
import Ingredients from './components/Ingredients';
import Recipe from './components/Recipe';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/ingredient' element={<Ingredients />} />
        <Route exact path='/recipe' element={<Recipe/>} />
      </Routes>
    </Router>
  );
}

export default App;
