import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Experience from './components/Experience';
import Services from './components/Services'; // This is now much longer
import Process from './components/Process';
import Slider from './components/Slider';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen font-sans bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Experience />
      <Services />      {/* 8 items make this a massive, attractive grid */}
      <Process />
      <Slider />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;