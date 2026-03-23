"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import { X, Facebook, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import type { ArticleId } from "./Header";

interface ArticleProps {
  activeArticle: ArticleId | null;
  onClose: () => void;
}

const articleVariants: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.325, ease: "easeInOut" } },
  exit: { opacity: 0, y: 4, transition: { duration: 0.325, ease: "easeInOut" } },
};

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Cerrar artículo"
      className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[rgba(255,255,255,0.075)] active:bg-[rgba(255,255,255,0.175)] cursor-pointer outline-none"
    >
      <X className="w-5 h-5 text-white" strokeWidth={1} />
    </div>
  );
}

function SocialIcon({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <li className="inline-block pr-3 last:pr-0 p-0">
      <a
        href={href}
        aria-label={label}
        className="w-9 h-9 leading-9 inline-flex items-center justify-center rounded-full shadow-[inset_0_0_0_1px_#fff] border-0 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.075)] active:bg-[rgba(255,255,255,0.175)]"
      >
        <Icon className="w-4 h-4" />
      </a>
    </li>
  );
}

export default function Articles({ activeArticle, onClose }: ArticleProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && activeArticle) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeArticle, onClose]);

  return (
    <div
      className={`absolute inset-0 z-[10] overflow-y-auto overflow-x-hidden ${
        activeArticle ? "flex flex-col" : "hidden"
      }`}
    >
      <div className="flex flex-col items-center w-full min-h-full p-4 sm:p-8 before:content-[''] before:grow after:content-[''] after:grow">
        <AnimatePresence mode="wait">
        {activeArticle === "nosotros" && (
          <motion.article
            key="nosotros"
            variants={articleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-[40rem] max-w-full bg-[rgba(27,31,34,0.85)] rounded p-[4.5rem_2.5rem_3rem] sm:p-[3.5rem_2rem_2.5rem] xs:p-[3rem_1.5rem_2.5rem]"
          >
            <CloseButton onClick={onClose} />
            <h2 className="text-[1.5rem] tracking-[0.5rem] font-semibold uppercase border-b border-white w-max pb-2 mb-8">
              Nosotros
            </h2>
            <span className="block my-10 w-full relative rounded overflow-hidden">
              <Image
                src="/images/nosotros-pascal.jpeg"
                alt="Pascal Solutions Intro"
                width={800}
                height={533}
                className="w-full h-auto rounded block"
              />
              <span className="absolute inset-0 bg-[rgba(19,21,25,0.5)] opacity-50 pointer-events-none rounded" />
            </span>
            <p>
              Somos <strong>Pascal Solutions TI</strong>, una consultoría especializada en transformar negocios a través de la tecnología. Brindamos soluciones escalables que impulsan la competitividad en la era digital.
            </p>
            <p>
              Estamos comprometidos con desarrollar software a tu medida, combinando ingeniería avanzada con innovación empresarial.
            </p>
          </motion.article>
        )}

        {activeArticle === "servicios" && (
          <motion.article
            key="servicios"
            variants={articleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-[40rem] max-w-full bg-[rgba(27,31,34,0.85)] rounded p-[4.5rem_2.5rem_3rem] sm:p-[3.5rem_2rem_2.5rem] xs:p-[3rem_1.5rem_2.5rem]"
          >
            <CloseButton onClick={onClose} />
            <h2 className="text-[1.5rem] tracking-[0.5rem] font-semibold uppercase border-b border-white w-max pb-2 mb-8">
              Servicios
            </h2>
            <span className="block my-10 w-full relative rounded overflow-hidden">
              <Image
                src="/images/servicios-pascal.jpg"
                alt="Nuestros Servicios"
                width={800}
                height={533}
                className="w-full h-auto rounded block"
              />
              <span className="absolute inset-0 bg-[rgba(19,21,25,0.5)] opacity-50 pointer-events-none rounded" />
            </span>
            <h3 className="text-[1.1rem] font-semibold tracking-widest uppercase mb-6 border-b border-white/50 w-fit pb-1">
              Innovación que Impulsa tu Negocio
            </h3>
            <ul className="list-disc pl-5 mb-6 space-y-4">
              <li>
                <strong>Landing Pages y Aplicaciones Web:</strong> Construimos experiencias digitales modernas, rápidas y efectivas para conectar con tus clientes y automatizar tus procesos en la web.
              </li>
              <li>
                <strong>Software a la Medida:</strong> Desarrollamos aplicaciones robustas y escalables diseñadas específicamente para optimizar tus procesos empresariales.
              </li>
              <li>
                <strong>Infraestructura Cloud & AWS:</strong> Diseñamos arquitecturas en la nube escalables, seguras y optimizadas para reducir costos y maximizar el rendimiento.
              </li>
            </ul>
          </motion.article>
        )}

        {activeArticle === "portafolio" && (
          <motion.article
            key="portafolio"
            variants={articleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-[40rem] max-w-full bg-[rgba(27,31,34,0.85)] rounded p-[4.5rem_2.5rem_3rem] sm:p-[3.5rem_2rem_2.5rem] xs:p-[3rem_1.5rem_2.5rem]"
          >
            <CloseButton onClick={onClose} />
            <h2 className="text-[1.75rem] tracking-[0.3rem] sm:tracking-[0.5rem] font-semibold uppercase border-b border-white w-max pb-2 mb-8">
              Nuestro Portafolio
            </h2>
            <p className="mb-8">
              Convertimos desafíos complejos en soluciones tecnológicas elegantes. Aquí algunos de nuestros proyectos más destacados:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {/* Proyecto 2 */}
              <div className="flex flex-col">
                <span className="block w-full relative rounded overflow-hidden mb-4 aspect-video">
                  <Image src="/images/landig-pages-pascal.jpg" alt="Landing pages" fill className="object-cover rounded" />
                </span>
                <h3 className="text-[1rem] font-semibold uppercase mb-2 leading-tight">Landing Pages y Aplicaciones Web</h3>
                <p className="text-[0.8rem] leading-relaxed m-0 text-white/80">Plataforma completa de comercio electrónico. Exhibe tus productos en un catálogo digital, gestiona pedidos e integra un carrito de compras con pasarela de pago segura.</p>
              </div>

              {/* Proyecto 4 */}
              <div className="flex flex-col">
                <span className="block w-full relative rounded overflow-hidden mb-4 aspect-video">
                  <Image src="/images/arquitectura-cloud-pascal.jpg" alt="Cloud Escalable" fill className="object-cover rounded" />
                </span>
                <h3 className="text-[1rem] font-semibold uppercase mb-2 leading-tight">Arquitectura Cloud Escalable</h3>
                <p className="text-[0.8rem] leading-relaxed m-0 text-white/80">Migración y optimización de servicios locales a la nube de AWS, garantizando 99.9% de disponibilidad y reducción de costos de servidores.</p>
              </div>
            </div>

            <div className="text-center pt-8 pb-8 sm:pb-10 border-t border-white/20 mt-6">
              <h3 className="text-[1.25rem] font-semibold tracking-widest uppercase mb-4">
                Tu visión, nuestra tecnología
              </h3>
              <p className="mb-6">
                Hemos ayudado a empresas de diversos sectores a dar el salto digital con soluciones que realmente funcionan. ¿Será la tuya la próxima?
              </p>
              <a href="https://api.whatsapp.com/send?phone=5216672016415&text=Buenas%20estoy%20interesado%20en%20los%20servicios%20de%20Pascal%20Solutions%20TI" target="_blank" rel="noopener noreferrer" className="inline-block border-b border-white/50 hover:border-white uppercase tracking-[0.2rem] text-[0.8rem] font-semibold pb-1 transition-colors duration-200 mt-2">
                Empezar hoy mismo
              </a>
            </div>
          </motion.article>
        )}

        {activeArticle === "contacto" && (
          <motion.article
            key="contacto"
            variants={articleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-[40rem] max-w-full bg-[rgba(27,31,34,0.85)] rounded p-[4.5rem_2.5rem_3rem] sm:p-[3.5rem_2rem_2.5rem] xs:p-[3rem_1.5rem_2.5rem]"
          >
            <CloseButton onClick={onClose} />
            <h2 className="text-[1.5rem] tracking-[0.5rem] font-semibold uppercase border-b border-white w-max pb-2 mb-8">
              Contáctanos
            </h2>
            
            <p className="mb-8">
              ¿Listo para modernizar tu infraestructura y automatizar procesos? Escríbenos y con gusto seremos tus aliados tecnológicos.
            </p>

            <ul className="flex list-none p-0 m-0 justify-center gap-2">
              <SocialIcon href="https://www.facebook.com/pascalsolutionsti" icon={Facebook} label="Facebook" />
              <SocialIcon href="https://www.instagram.com/pascalsolutionsti/" icon={Instagram} label="Instagram" />
              <SocialIcon href="https://api.whatsapp.com/send?phone=5216672016415&text=Buenas%20estoy%20interesado%20en%20los%20servicios%20de%20Pascal%20Solutions%20TI" icon={FaWhatsapp} label="WhatsApp" />
              <SocialIcon href="https://www.linkedin.com/company/pascalsolutionsti/posts/?feedView=all" icon={Linkedin} label="LinkedIn" />
            </ul>
          </motion.article>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
