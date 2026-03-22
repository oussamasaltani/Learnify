import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/App.css";
import { ThemeProvider } from './components/ThemeContext';
import PageTransition from './components/PageTransition';
import Header from './components/layout/Header/Header';
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnRoute from './components/ScrollToTopOnRoute';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,        
      easing: "ease-out", 
      once: true,
      offset: 80,        
      disable: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTopOnRoute />
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/join" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </PageTransition>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  )
}
