
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import BannerSlider from './components/banner';
import IntroduceHome from './features/introduce_home'
import ProductList from './features/product';
import ServiceHome from './features/service_home';
import News from './features/news';
import NewsPaper from './features/newspaper';
import FooterImg from './features/footerlogo';
import Footer from './features/footer';
import ProductPages from './components/productPages';
import HomePages from './components/home';
import Intro from './components/intro';
import NewsPages from './components/news';
import ServicePages from './components/servicee';
import LoginForm from './components/loginfrom';
function App() {
  
  return (
    <div>
   
   <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/sanpham"  element={<ProductPages />} />
        <Route path="/sanpham/Kawasaki"  element={<ProductPages />} />
        <Route path="/sanpham/honda"  element={<ProductPages />} />
        <Route path="/thongtincanhan"  element={<Intro />} />
        <Route path="/tintuc"  element={<NewsPages />} />
        <Route path="/dichvu"  element={<ServicePages />} />
        <Route path="/lienhe"  element={<LoginForm />} />
        
      </Routes>
    </Router>
      </div>
  );
}

export default App;
