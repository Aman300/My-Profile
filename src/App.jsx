
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import UserContextProvider from './context/UserContextProvider';
import Services from './pages/Services';

export default function App() {
  return (
    <>
    
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route>
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <div>
                    <Outlet /> 
                  </div>
                  {/* <Footer/> */}
                </div>
              }
            >
              <Route path="/" element={<Home />} /> 
              <Route path="/work" element={<Work />} /> 
              <Route path="/about" element={<About />} /> 
              <Route path="/contact" element={<Contact />} />             
              <Route path="/services" element={<Services />} />             
            </Route>
         </Route>
        </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  )
}