
import './App.css';
import Navbar from './sections/Navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/About/About';
import Contact from './sections/contact/Contact';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testmonial from './sections/testmonials/Testmonial';
import FAQS from './sections/faq/FAQS';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';

function App() {
  return (
   <main>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Portfolio />
    <Testmonial />
    <FAQS />
    <Contact />
    <Footer />
    <FloatingNav />
   </main>
  );
}

export default App;
