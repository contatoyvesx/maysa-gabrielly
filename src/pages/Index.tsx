import Header from "@/components/easter/Header";
import Hero from "@/components/easter/Hero";
import About from "@/components/easter/About";
import CatalogSection from "@/components/easter/CatalogSection";
import Observations from "@/components/easter/Observations";
import Footer from "@/components/easter/Footer";
import WhatsAppFloat from "@/components/easter/WhatsAppFloat";
import { lembrancinhas, ovosTradicionais } from "@/data/products";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <CatalogSection id="lembrancinhas" title="Lembrancinhas" products={lembrancinhas} />
      <CatalogSection id="ovos" title="Ovos Tradicionais" products={ovosTradicionais} />
      <Observations />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
