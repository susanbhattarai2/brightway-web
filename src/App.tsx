import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './sections/Header'
import Footer from './sections/Footer'
import Home from './pages/Home'
import About from './pages/About'
import DestinationsPage from './pages/DestinationsPage'
import ServicesPage from './pages/ServicesPage'
import TestPrepPage from './pages/TestPrepPage'
import Contact from './pages/Contact'
import Australia from './pages/Australia'
import Southkorea from './pages/Southkorea'
import Canada from './pages/Canada'
import Japan from './pages/Japan'
import Uk from './pages/Uk'
import Usa from './pages/Usa'
import Newzealand from './pages/Newzealand'
import Ielts from './pages/Ielts'
import Pte from './pages/Pte'
import Nat from './pages/Nat'
import Topik from './pages/Topik'


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/test-preparation" element={<TestPrepPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/australia" element={<Australia />} />
            <Route path="/south-korea" element={<Southkorea />} />
            <Route path="/canada" element={<Canada />} />
            <Route path="/japan" element={<Japan />} />
            <Route path="/uk" element={<Uk />} />
            <Route path="/usa" element={<Usa />} />
            <Route path="/new-zealand" element={<Newzealand />} />
            <Route path="/ielts" element={<Ielts />} />
            <Route path="/pte" element={<Pte />} />
            <Route path="/nat" element={<Nat />} />
            <Route path="/topik" element={<Topik />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
