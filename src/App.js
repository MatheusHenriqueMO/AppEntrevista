
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<RegisterPage/>}/>
        <Route exact path='/home' element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
