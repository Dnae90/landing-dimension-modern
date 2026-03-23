"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export type ArticleId = "nosotros" | "servicios" | "portafolio" | "contacto";

interface HeaderProps {
  isArticleVisible: boolean;
  isLoading: boolean;
  onOpenArticle: (id: ArticleId) => void;
}

const navItems: { id: ArticleId; label: string }[] = [
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "portafolio", label: "Portafolio" },
  { id: "contacto", label: "Contacto" },
];

export default function Header({
  isArticleVisible,
  isLoading,
  onOpenArticle,
}: HeaderProps) {
  return (
    <motion.header
      className={`flex flex-col items-center text-center max-w-full transition-all duration-[0.325s] ease-in-out ${
        isArticleVisible
          ? "scale-95 blur-[0.1rem] opacity-0 pointer-events-none"
          : ""
      }`}
      style={{
        backgroundImage:
          "radial-gradient(rgba(0,0,0,0.25) 25%, rgba(0,0,0,0) 55%)",
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.325, ease: "easeInOut" }}
        className="w-[5.5rem] h-[5.5rem] leading-[5.5rem] border border-white rounded-full flex items-center justify-center"
      >
        <Cpu className="w-8 h-8" strokeWidth={1} />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.325, ease: "easeInOut" }}
        className="relative mt-14 border-t border-b border-white max-w-full before:content-[''] before:block before:absolute before:top-[calc(-3.5rem-1px)] before:left-[calc(50%-1px)] before:w-px before:h-[calc(3.5rem+1px)] before:bg-white"
      >
        <motion.div
          initial={{ maxHeight: 0, paddingTop: 0, paddingBottom: 0, opacity: 0 }}
          animate={
            isLoading
              ? { maxHeight: 0, paddingTop: 0, paddingBottom: 0, opacity: 0 }
              : { maxHeight: "40rem", paddingTop: "3rem", paddingBottom: "3rem", opacity: 1 }
          }
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.25 }}
          className="overflow-hidden px-8 sm:px-4"
        >
          <h1 className="text-[2.25rem] leading-[1.3] tracking-[0.5rem] font-semibold uppercase m-0 mb-4 sm:text-[1.75rem]">
            Pascal Solutions
          </h1>
          <p className="uppercase tracking-[0.2rem] text-[0.8rem] leading-8 mb-0">
            Desarrollo de Software a tu Medida.<br />
            Consultoría especializada en transformar negocios<br />
            a través de la tecnología escalable y moderna.
          </p>
        </motion.div>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.325, ease: "easeInOut" }}
        className="relative mt-14"
      >
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-4 m-0 p-0 list-none">
          {navItems.map((item) => (
            <li key={item.id} className="p-0">
              <button
                onClick={() => onOpenArticle(item.id)}
                className="block w-full sm:w-auto min-w-[10rem] sm:min-w-[7.5rem] h-12 sm:h-[2.75rem] leading-[3rem] sm:leading-[2.75rem] px-5 uppercase tracking-[0.2rem] text-[0.8rem] text-white bg-transparent border border-white rounded cursor-pointer transition-colors duration-200 hover:bg-[rgba(255,255,255,0.075)] active:bg-[rgba(255,255,255,0.175)]"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.header>
  );
}
