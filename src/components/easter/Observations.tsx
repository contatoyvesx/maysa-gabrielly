import { observacoes } from "@/data/products";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

export default function Observations() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="observacoes" className="py-16 px-4 bg-muted/50 scroll-mt-20">
      <div className="container mx-auto max-w-2xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-3xl font-semibold text-foreground text-center mb-8">
            Observações
          </h2>
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <ul className="space-y-4">
              {observacoes.map((obs, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{obs}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
