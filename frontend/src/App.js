//import from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import pages
import Register from './pages/Register';
import Confirmation from './pages/Confirmation';

//import styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
            path="/"
            element={<Register />}
            />
            <Route 
            path="confirmation"
            element={<Confirmation />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
