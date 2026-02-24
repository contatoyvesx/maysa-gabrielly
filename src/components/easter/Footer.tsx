import { WHATSAPP_NUMBER } from "@/data/products";

export default function Footer() {
  return (
    <footer className="py-12 px-4 text-center border-t border-border">
      <div className="container mx-auto max-w-lg">
        <p className="font-serif text-xl text-foreground mb-2">Maysa Gabrielly</p>
        <p className="text-sm text-muted-foreground mb-4">Páscoa 2026 • Feito com ❤️</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:text-sage-dark transition-colors"
        >
          WhatsApp: (11) 98379-5417
        </a>
      </div>
    </footer>
  );
}
