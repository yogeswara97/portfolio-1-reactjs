import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './layout/Navbar';
import './app.css';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetail from './pages/ProjectDetail';
import ChatbotGemini from './pages/ChatBotGemini';
function App() {
  
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/chatbot"  element={<ChatbotGemini />}/> 
        {/* Redirect ke halaman home jika route tidak ditemukan */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
