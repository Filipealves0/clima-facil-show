import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="inicio">
          <Hero />
        </div>
        <Process />
        <div id="servicos">
          <Services />
        </div>
        <div id="sobre">
          <About />
        </div>
        <div id="contato">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
