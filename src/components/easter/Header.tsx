import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Lembrancinhas", href: "#lembrancinhas" },
  { label: "Ovos Tradicionais", href: "#ovos" },
  { label: "Observações", href: "#observacoes" },
  { label: "Pedir no WhatsApp", href: "#pedir" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-serif text-lg font-semibold text-foreground tracking-wide">
          Maysa Gabrielly <span className="text-muted-foreground font-sans text-sm font-normal ml-1">• Páscoa 2026</span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in-slow">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border last:border-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
