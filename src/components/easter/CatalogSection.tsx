import { Button } from "@/components/ui/button";
import { getWhatsAppLink, type Product } from "@/data/products";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function ProductCard({ product }: { product: Product }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-border flex flex-col ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {product.image && (
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-accent-foreground font-medium mb-3">
          {product.weight} — <span className="text-foreground font-semibold">R${product.price}{product.variants ? "+" : ""}</span>
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">{product.description}</p>

        {product.flavors && (
          <p className="text-xs text-muted-foreground mb-2">
            <span className="font-medium text-foreground">Sabores:</span> {product.flavors}
          </p>
        )}

        {product.variants && (
          <div className="flex flex-wrap gap-2 mb-3">
            {product.variants.map((v) => (
              <span
                key={v.weight}
                className="text-xs bg-muted rounded-full px-3 py-1 text-muted-foreground"
              >
                {v.weight}: R${v.price}
              </span>
            ))}
          </div>
        )}

        {product.note && (
          <p className="text-xs text-sage-dark italic mb-4">⚠ {product.note}</p>
        )}

        <Button variant="catalog" size="sm" asChild className="mt-auto self-start">
          <a
            href={getWhatsAppLink(product.name, product.weight, product.price)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir este item
          </a>
        </Button>
      </div>
    </div>
  );
}

interface CatalogSectionProps {
  id: string;
  title: string;
  products: Product[];
}

export default function CatalogSection({ id, title, products }: CatalogSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={id} className="py-16 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">{title}</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={`${product.name}-${product.weight}-${i}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
