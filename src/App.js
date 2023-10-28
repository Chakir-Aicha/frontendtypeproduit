import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importez Routes au lieu de Switch
import CreateProduct from "./components/CreateProduct";
import CreateType from "./components/CreateType";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/create" element={<CreateType />} /> {/* Utilisez 'element' au lieu de 'component' */}
              <Route path="/" element={<CreateProduct />} />
          </Routes>
      </Router>
  );
}

export default App;
