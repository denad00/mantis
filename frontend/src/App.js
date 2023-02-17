import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Confirmation from './pages/Confirmation';
import 'bootstrap/dist/css/bootstrap.min.css';

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
