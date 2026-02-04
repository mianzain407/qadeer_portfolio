import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PodcastLibrary from './pages/PodcastLibrary';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import RamzanRevival from './pages/RamzanRevival';
import ComingSoon from './pages/ComingSoon';
import PhysioConsultation from './pages/PhysioConsultation';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/podcast-library" element={<PodcastLibrary />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses/ramzan-revival" element={<RamzanRevival />} />
            <Route path="/courses/physiotherapy-consultation" element={<PhysioConsultation />} />
            <Route path="/courses/under-development" element={<ComingSoon />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
