import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/products";
import { Button } from "@/components/ui/button";

export default function WhatsAppFloat() {
  return (
    <Button
      variant="whatsapp"
      size="icon"
      asChild
      className="fixed bottom-6 right-6 z-50 w-14 h-14 shadow-xl hover:scale-110 transition-transform duration-300"
    >
      <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp">
        <MessageCircle size={26} />
      </a>
    </Button>
  );
}
