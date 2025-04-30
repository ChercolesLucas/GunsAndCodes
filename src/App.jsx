import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Deliverables from "./components/Deliverables";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#191818] text-white font-sans min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Deliverables />
      <Footer />
    </div>
  );
}

export default App;
