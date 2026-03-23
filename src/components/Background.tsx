"use client";

import Image from "next/image";

export default function Background({
  isArticleVisible,
  isLoading,
}: {
  isArticleVisible: boolean;
  isLoading: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-[1] transform scale-100 backface-hidden"
      aria-hidden="true"
    >
      {/* Overlay layer (::before) */}
      <div
        className="absolute inset-0 z-[2] transition-[background-color] duration-[2.5s] ease-in-out"
        style={{
          transitionDelay: "0.75s",
          backgroundImage: `linear-gradient(to top, rgba(19,21,25,0.5), rgba(19,21,25,0.5)), url("/images/overlay.png")`,
          backgroundSize: "auto, 256px 256px",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, repeat",
          backgroundColor: isLoading ? "#1b1f22" : "transparent",
        }}
      />

      {/* Background image (::after) */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <Image
          src="/images/bg.jpg"
          alt="Mountain landscape background"
          fill
          priority
          quality={90}
          className={`object-cover object-center transition-all duration-[0.325s] ease-in-out ${
            isArticleVisible
              ? "scale-[1.0825] blur-[0.2rem]"
              : "scale-[1.125]"
          }`}
        />
      </div>
    </div>
  );
}
