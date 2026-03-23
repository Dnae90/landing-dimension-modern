"use client";

interface FooterProps {
  isArticleVisible: boolean;
  isLoading: boolean;
}

export default function Footer({ isArticleVisible, isLoading }: FooterProps) {
  return (
    <footer
      className={`w-full max-w-full mt-8 text-center transition-all duration-[0.325s] ease-in-out ${
        isArticleVisible
          ? "scale-95 blur-[0.1rem] opacity-0 pointer-events-none"
          : ""
      } ${isLoading ? "opacity-0" : ""}`}
    >
      <p className="tracking-[0.2rem] text-[0.6rem] opacity-75 mb-0 uppercase">
        &copy; 2026 Pascal Solutions TI. Todos los derechos reservados.
      </p>
    </footer>
  );
}
