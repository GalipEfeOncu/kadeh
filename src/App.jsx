import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import KategoriSayfasi from './pages/KategoriSayfasi';
import DrinkPage from './pages/DrinkPage';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tur/:ana_tur" element={<KategoriSayfasi />} />
          <Route path="/drink/:id" element={<DrinkPage />} />
          <Route path="/hakkinda" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
