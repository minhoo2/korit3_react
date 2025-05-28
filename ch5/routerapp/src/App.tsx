//App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import './App.css'
import ContactBusan from './components/ContactBusan'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> 
          { ' | ' }
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="contact" element={<Contact />} >
            <Route path="busan" element={<ContactBusan />} />
          </Route>
            
          

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// Contact.tsx
import ContactBusan from "./ContactBusan";
import { Routes, Route } from "react-router-dom";

export default function Contact() {
  
  return (
    <>
      <h3>Contact Component</h3>
      <Routes>
        <Route path="busan" element = { <ContactBusan />} />
      </Routes>
    </>
    
  );
}