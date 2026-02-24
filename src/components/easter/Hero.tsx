import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/products";
import heroImage from "@/assets/hero-easter.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ovos de Páscoa artesanais"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-up">
          Maysa Gabrielly
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-up delay-100">
          Cardápio de Páscoa 2026
        </h1>
        <p className="text-lg text-muted-foreground mb-10 animate-fade-up delay-200">
          Encomende com carinho e antecedência
        </p>
        <div className="animate-fade-up delay-300">
          <Button variant="hero" size="lg" asChild>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" id="pedir">
              Pedir no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
