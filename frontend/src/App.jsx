import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Brands from './components/Brands';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Products />
      <Brands />
      <Gallery />
      <WhyUs />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="relative bg-[#0a1628] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
