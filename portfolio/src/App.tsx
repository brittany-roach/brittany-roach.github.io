import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './views/Home'
import Portfolio from './views/Portfolio'
import ArtWork from './views/ArtWork'
import About from './views/About'
import DouglasReno from './views/DouglasReno'
import VogueOffice from './views/VogueOffice'
import MulberryProject from './views/MulberryProject'
import './App.css'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/douglas-reno" element={<DouglasReno />} />
          <Route path="/portfolio/vogue-office" element={<VogueOffice />} />
          <Route path="/portfolio/mulberry-community-project" element={<MulberryProject />} />
          <Route path="/art-work" element={<ArtWork />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
