import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import Features from './components/features';
import Footer from './components/footer';
import POSSystem from './Home.jsx';
import './Styles/styles.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
              </>
            }
          />
          <Route path="/pos" element={<POSSystem />} /> {/* Route for POS system */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}