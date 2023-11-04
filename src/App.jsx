import './App.css'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import NavBar from './components/PrincipalPage';
import PageAri1 from './components/PageAri1';
import PageAriShop from './components/PageAriShop';
import PrincipalPage from './components/PrincipalPage'
import MusicAri from './components/MusicAri';
import VideoAri from './components/VideoAri';
import FormAri from './components/FormAri';
import FooterAri from './components/FooterAri';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <PageAri1 />
      <PageAriShop />
      <MusicAri />
      <VideoAri />
      <FormAri />
      <section className='content'>
        <Routes>
          <Route path='/' element={<PrincipalPage />} />
          <Route path='pagePrincipal' element={<PageAri1 />} />
          <Route path='shop' element={<PageAriShop />} />
          <Route path='music' element={<MusicAri />} />
          <Route path="*" element={
            <div className="jumbo">
              <h1>Error 404</h1>
            </div>
          } />
        </Routes>
      </section>
      <FooterAri />
    </BrowserRouter>
  )
}

export default App
