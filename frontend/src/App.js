import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
