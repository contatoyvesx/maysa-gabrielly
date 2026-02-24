import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4" ref={ref}>
      <div
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-block mb-6">
          <span className="text-4xl">🐰</span>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Olá, me chamo <span className="font-semibold text-foreground">Maysa</span>! A época mais doce do ano está
          se aproximando. Preparei com muito cuidado e carinho cada item do catálogo a seguir.
          Espero que goste. ❤️
        </p>
      </div>
    </section>
  );
}
